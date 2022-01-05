var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head
    let cur = head, n = 1
    while (cur.next) {
        cur = cur.next
        n++
    }
    cur.next = head
    k %= n
    let i = n - k 
    while (--i) {
        head = head.next
    }
    cur = head
    head = cur.next
    cur.next = null
    return head
};

