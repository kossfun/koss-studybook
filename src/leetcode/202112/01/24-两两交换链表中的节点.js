var swapPairs = function(head) {
    if (head === null) return null

    if (head.next === null) return head

    let arr = []
    let curr = head
    while (curr) {
        arr.push(curr.val)
        curr = curr.next
    }

    let len = arr.length

    let node = new ListNode()
    let p = node
    if (len%2 === 0) {
        for (let i = 0; i < len / 2; i++) {
            p.next = new ListNode(arr[i * 2 + 1])
            p = p.next
            p.next = new ListNode(arr[i * 2])
            p = p.next
            
        }
    } else {
        for (let i = 0; i < (len - 1) / 2; i++) {
            p.next = new ListNode(arr[i * 2 + 1])
            p = p.next
            p.next = new ListNode(arr[i * 2])
            p = p.next
            p.next = new ListNode(arr[i * 2 + 2])
        }
        
    }

    return node.next

};
