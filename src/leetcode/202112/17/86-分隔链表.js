var partition = function(head, x) {
    if(!head||!head.next) return head
    let vnodeBig = new ListNode(-1,head)
    let vnodeSmall = new ListNode(-1,head)
    let big = vnodeBig
    let small = vnodeSmall
    while(head){
        if(head.val<x){
            small.next = head
            small = small.next
        }else{
            big.next =head
            big = big.next
        }
        head = head.next
    }
    big.next = null
    small.next = vnodeBig.next
    return vnodeSmall.next
};

