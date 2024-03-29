var reverseBetween = function(head, left, right) {
    if (left === right) return head
    // 虚拟头节点
    const vNode = new ListNode(-1)
    vNode.next = head
 
    // 反转头节点的前一个节点
    let prev = vNode
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next
    }
 
     // 反转尾节点
     let rightNode = prev
     for (let i = 0; i < right - left + 1; i++) {
         rightNode = rightNode.next
     }
     
     // 反转头节点 
     let leftNode = prev.next
     // 反转尾节点的后一个节点
     let curr = rightNode.next
 
     prev.next = null
     rightNode.next = null
 
     // 反转
     reverse(leftNode)
     
     // 拼接
     prev.next = rightNode
     leftNode.next = curr
     
     return vNode.next
 };
 
 // 这里跟 206-反转链表相同
 var reverse = function(head) {
     let prev = null
     curr = head
 
     while(curr) {
         const next = curr.next
         curr.next = prev
         prev = curr
         curr = next
     }
 }
 