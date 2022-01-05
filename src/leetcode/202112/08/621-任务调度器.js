var leastInterval = function(tasks, n) {
    const obj = {}
    for (let i = 0; i < tasks.length; i++) {
        if (!obj[tasks[i]]) {
            obj[tasks[i]] = 1
        } else {
            obj[tasks[i]]++
        }
    }
    // 获取数量最多的任务种类的任务数
    const max = Math.max(...Object.values(obj))
    let maxCount = 0
    // 获取数量最多的任务种数
    Object.values(obj).forEach(i => {
        if (i === max) maxCount++
    })
    // 获取两者之间的较大值
    return Math.max((max - 1) * (n + 1) + maxCount, tasks.length)
};


