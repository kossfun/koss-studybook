var minRemoveToMakeValid = function(s) {
    // 第一步
    let stack = []
    let arr = s.split('')
    // 第二步
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            stack.push(i)
        }
        if (arr[i] === ')') {
            if (stack.length <= 0) {
                arr[i] = ''
            } else {
                stack.pop()
            }
        }
    }
    // 第三步
    for (let i = 0; i < stack.length; i++) {
        arr[stack[i]] = ''
    }
    // 第四步
    return arr.join('')
};

