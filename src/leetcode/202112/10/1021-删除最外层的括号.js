/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
    const n = s.length;
    let result = "";
    let left = 0;

    for (let i = 0; i < n; i++) {
        // 右括号要先做匹配，看是否需要加当前
        if (s[i] === ")") left--;
        if (left > 0) result += s[i];
        // 左括号要看之前是否为0
        if (s[i] === "(") left++;
    }

    return result;
};

