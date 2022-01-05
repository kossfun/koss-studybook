function deepCLone(obj, cache =  new WeakMap()) {
    if (typeof obj !== 'object') return obj
    if (obj === null) return obj
    if (cache.get(obj)) return cache.get(obj) // 防止循环引用，程序进入死循环
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)

    let cloneObj = new obj.constructor()
    cache.set(obj, cloneObj)
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepCLone(obj[key], cache)
        }
    }
    return cloneObj
}

const obj = {name: 'Jack', address: {x: 100, y: 200, regexp: /^1[234]/g}}
obj.a = obj

const copyObj = deepCLone(obj)

const newObj = obj

console.log(newObj.address === obj.address)
console.log(copyObj.address === obj.address)