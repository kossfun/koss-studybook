var hasCycle = function(head) {
    if (head === null) return false
    
    const record = new Set()
    while(head) {
        if (record.has(head)) return true
        
        record.add(head)
        head = head.next
    }

    return false
}
