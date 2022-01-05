class EventBus {
    constructor() {
        this.cache = {}
    }

    on(name, fn) {
        if (this.cache[name]) {
            this.cache[name].push(fn)
        } else {
            this.cache[name] = [fn]
        }
    }

    off(name, fn) {
        const tasks = this.cache[name]
        if (tasks) {
            const index = tasks.findIndex((f) => f === fn || f.callback === fn )
            if (index >= 0) {
                tasks.splice(index, 1)
            }
        }
    }

    emit(name, once = false) {
        if (this.cache[name]) {
            const tasks = this.cache[name].slice()
            for(let fn of tasks) {
                fn()
            }

            if (once) {
                delete this.cache[name]
            }
        }
    }
}

const eventBus = new EventBus()

const task1 = () => {console.log('task1')}
const task2 = () => {console.log('task2')}

eventBus.on('task', task1)
eventBus.on('task', task2)

const timer = setInterval(() => {
    eventBus.emit('task')
}, 3000)

setTimeout(() => {
    eventBus.off('task', task1)
}, 10 * 1000)



setTimeout(() => {
    eventBus.off('task')
    clearInterval(timer)
}, 20 * 1000)