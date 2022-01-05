var fib = function(n) {
    // 特殊判断
    if(n<2) return n;
    const mod = 1000000007;
    // 利用滚动数组优化空间复杂度
    let num1 = 0,num2 = 1,cur;
    // 求得每一项的值
    for(let i = 2;i<=n;i++){
      cur = (num1+num2)%mod;
      num1 = num2;
      num2 = cur;
    }
    // 返回第n项的值
    return cur%mod
  };
  
  