function throttle(fn, delay) {
    let last = 0
    return function(...args) {
        const now = Date.now()
        if (now - last > delay) {
            last = now
            fn.apply(this, args)
        }
    }

}

function throttle1(fn, delay) {
    let timer
    return function(...args) {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null
                fn.apply(this, args)
            }, delay)
        }
       
    }
}



function task() {
    console.log('task')
}

const throttleTask = throttle1(task, 1000)

setInterval(throttleTask, 100);