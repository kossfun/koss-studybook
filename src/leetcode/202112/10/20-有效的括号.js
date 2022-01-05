/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s){
        let size = s.length
        if(size % 2 !== 0) return false
        let map = new Map([
            ["]","["],
            [")","("],
            ["}","{"],
        ])
        let stack = []
        for(ch of s){
            if(map.has(ch)){
                if(!stack.length || stack[stack.length - 1] !== map.get(ch)){
                    return false
                }
                stack.pop()
            }else{
                stack.push(ch)
            }
        }
        return stack.length === 0
    }
    
    