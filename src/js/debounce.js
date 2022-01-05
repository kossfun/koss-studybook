function debounce(fn, delay) {
    let timer
    return function(...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)

    }
}


function task() {
    console.log('task1')
}

const debounceTask = debounce(task, 1000)

const inter = setInterval(debounceTask, 100);

setTimeout(() => {
    clearInterval(inter)
}, 4000);