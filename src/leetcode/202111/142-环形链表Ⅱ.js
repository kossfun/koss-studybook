var detectCycle = function(head) {
    const record = new Set()
    while(head) {
        if (record.has(head)) return head
        
        record.add(head)
        head = head.next
    }
    return null
}
