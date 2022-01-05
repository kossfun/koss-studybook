/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
 var splitListToParts = function(head, k) {
    // 一轮遍历计算出长度
    let count = 0, cur = head;
    while (cur) {
        cur = cur.next;
        count++;
    }

    // 结果中每个节点的长度
    let result = new Array(k).fill(Math.floor(count / k));

    // 平均分配完，有多的加到前面的节点
    let over = count % k;
    while (over > 0) {
        result[over - 1]++;
        over--;
    }

    // 根据各段的长度切割链表
    return result.map(item => {
        let newItem = head;
        let cur = newItem;

        // 一开始进来就是第一个节点了
        while (item > 1) {
            cur = cur && cur.next;
            item--;
        }

        if (cur) {
            const next = cur.next;
            cur.next = null;
            head = next;
        } 

        return newItem;
    });
};

