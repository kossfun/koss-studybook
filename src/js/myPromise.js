class MyPromise {
    constructor(executor) {
        this.status = 'pending'
        this.value = null
        this.fulfilledCallbacks = []
        this.rejectedCallbacks = []
        const that = this

        function resolve(val) {
            if (that.status === 'pending') {
                that.status = 'resolved'
                that.value = val
                that.fulfilledCallbacks.forEach(fn => fn(that.value))
            }
        }

        function reject(val) {
            if (that.status === 'pending') {
                that.status = 'rejected'
                that.value = val
                that.rejectedCallbacks.forEach(fn => fn(that.value))
            }
        }

      
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
        
    }

    then(onFulfilled, onRejected)  {
        if (this.status === 'pending') {
            this.fulfilledCallbacks.push(() => {
                onFulfilled(this.value)
            })

            this.rejectedCallbacks.push(() => {
                onRejected(this.value)
            })
        }

        if (this.status === 'resolved') {
            onFulfilled(this.value)
        }

        if (this.status === 'rejected') {
            onRejected(this.value)
        }

    }
   
}

function test() {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.6) {
                resolve(1)
            } else {
                reject(2)
            }
        }, 1000)
    })
}

test().then(
res => {
    console.log('yes', res)
},
e => {
    console.log('no', e)
})

