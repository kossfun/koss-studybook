/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    // 判断是不是头节点
    if (head.val === val) {
        return head.next;
    }

    let cur = head;

    // 如果不是头节点就简单了，每次判断当前节点的后继节点直接进行删除
    // 正常来说我们只需要判断cur.next即可，但是如果删除的是末尾节点，删除完后cur 就为null了，所以需要兼容一下
    while (cur && cur.next) {
        if (cur.next.val === val) {
           cur.next = cur.next.next; 
           break;
        }

        cur = cur.next;
    }

    return head;
};

