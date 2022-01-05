var isHappy = function(n) {
    const record = new Set()
     while(n !== 1 && !record.has(n)) {
         record.add(n)
         n = getNext(n)
     }
     return n === 1
 };
 
 var getNext = function(n) {
     let sum = 0 
     while(n) {
         sum += (n%10) ** 2
         n = Math.floor(n/ 10)
     }
     return sum
 }
 