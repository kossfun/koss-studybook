/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    return formatString(s) === formatString(t);
};

function formatString(str) {
    // 先遍历s字符串，遇到"#"删除一个元素
    let stack = [];

    const n = str.length;
    for (let i = 0; i < n; i++) {
        if (str[i] === "#") {
            stack.pop();
        } else {
             stack.push(str[i]);
        }
    }

    // 返回格式化后的字符串
    return stack.join("");
}

