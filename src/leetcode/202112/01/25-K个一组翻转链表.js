var reverseKGroup = function(head, k) {
    if (k === 1) return head
    const newNode = new ListNode(-1, head)
    let pre = newNode, n = k, s = e = head
    while (s) {
        while (--n && e) {
            e = e.next
        }
        if (!e) return newNode.next
        pre.next = reverse(s, k)
        pre = s
        s = e = s.next
        n = k
    }
    return newNode.next
};

var reverse = function(head, k) {
    let cur = head, next = head.next
    while (--k) {
        head.next = next.next
        next.next = cur
        cur = next
        next = head.next
    }
    return cur
}

