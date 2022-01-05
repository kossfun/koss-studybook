var longestWPI = function(hours) {
    let stack = []; // +1 -1序列
    let sum = [0]; // 前缀和序列，且额外增加一个0
    hours.forEach(v => stack.push(v > 8 ? 1 : -1)); // 转换为 +1 -1
    stack.forEach(v => sum.push(v + sum[sum.length - 1])); // 转换为前缀和
    let max = 0;
    for (let i = sum.length - 1; i >= 0;  i--) {
      const num = sum[i];
      for (let j = i - 1; j >= 0 ; j--) { // 遍历从位置 n 到 位置0 - n 这个区间中，比下标n小于的值，取最长即可
        const element = sum[j];
        if (element < num ) {
          max = Math.max(max,i - j);
        } else continue;
      }
    }
    return max;
  };
  
  