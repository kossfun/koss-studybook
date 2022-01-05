 /**
 * @param {number[]} arr
 * @return {number[]}
 */
  function pancakeSort(arr) {
    let result = [];
    // 每轮排序一个，排到为0为止
    while (arr.length > 1) {
        [result, arr] = sortOne(arr, result);
    }

    return result;
};

// 每轮排一个数，把未排序数组最大值舀出去
function sortOne(arr, result) {
    let maxValue = arr[0], maxIndex = 0;
    const n = arr.length;

    // 找到最大值
    for (let i = 1; i < n; i++) {
        if (arr[i] > maxValue) {
            maxIndex = i;
            maxValue = arr[i];
        }
    }

    // 如果它本来就在最后面就不用操作了
    if (maxIndex === n - 1) {
        return [ result, arr.slice(0, n - 1)];
    }

    // 把最大值颠个勺翻到最前面
    arr = [ ...arr.slice(0, maxIndex).reverse(), ...arr.slice(maxIndex + 1) ];

    // 未排序的数组整个颠个勺，把最大值翻到最后面
    // 未排序的数量减一，最后一个已经是正确的了
    return [[ ...result, maxIndex + 1, n ], arr.reverse()];
}


