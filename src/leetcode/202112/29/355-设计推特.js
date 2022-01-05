var Twitter = function() {
    this.twitterList = []
    this.step = 0
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    /**
        {
            userId: 0,
            follow: [],
            tweet: []
        }
     */
        if (!this.hasUser(userId)) {
            this.twitterList.push(
                {
                    userId: userId,
                    follow: [],
                    tweet: [
                        {
                            time: new Date().getTime() + this.step,
                            tweetId: tweetId
                        }
                    ]
                }
            )
        } else {
            const index = this.twitterList.findIndex(el => el.userId === userId)
            let user = this.twitterList[index]
            if (user.tweet.findIndex(el => el.tweetId === tweetId) === -1) {
                user.tweet.push({
                    time: new Date().getTime() + this.step,
                    tweetId: tweetId
                })
                this.twitterList.splice(index, 1, user)
            }
        }

        this.step += 1
       
        console.log('postTweet', `[${userId}, ${tweetId}]`, JSON.stringify(this.twitterList))
    
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if (!this.hasUser(userId)) return []

    const my = this.twitterList.find(el => el.userId === userId)

    const followList = this.twitterList.filter(el => my.follow.includes(el.userId))
    const allList = followList.concat([my])

    const tweetList = allList.map(el => el.tweet).reduce((all, curr) => all.concat(curr), [])
    tweetList.sort((a, b) => b.time - a.time)

    let tweetIdList = tweetList.map(el => el.tweetId)
    console.log('getNewsFeed', userId, 'allList', JSON.stringify(allList), 'followList', JSON.stringify(followList), 'tweetList', JSON.stringify(tweetList), 'tweetIdList', tweetIdList)
     if (tweetIdList.length < 10) {
        return tweetIdList
    } else {
        return tweetIdList.slice(0, 10)
    }
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.hasUser(followerId)) {
        this.twitterList.push(
            {
                userId: followerId,
                follow: [followeeId],
                tweet: []
            }
        )
    } else {
        let index = this.twitterList.findIndex(el => el.userId === followerId)
        let user = this.twitterList[index]

        // 判断是否重复关注
        const idx = user.follow.findIndex(el => el.followeeId)
        if (idx > -1) return

        user.follow.push(followeeId)
        this.twitterList.splice(index, 1, user)
    }

    console.log('follow', `[${followerId}, ${followeeId}]`, JSON.stringify(this.twitterList))
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (!this.hasUser(followerId)) return
    const index = this.twitterList.findIndex(el => el.userId === followerId)
    let user = this.twitterList[index]

    const idx = user.follow.findIndex(el => el === followeeId)
    if (idx === -1) return
    user.follow.splice(idx, 1)
    this.twitterList.splice(index, 1, user)

    console.log('unfollow', `[${followerId}, ${followeeId}]`, this.twitterList)
};

/** 
 * @param {number} userId 
 * @return {boolean}
 */
Twitter.prototype.hasUser = function(userId) {
    if (this.twitterList.length === 0) {
        return false
    }
    return this.twitterList.findIndex(el => el.userId === userId) !== -1
}
/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
