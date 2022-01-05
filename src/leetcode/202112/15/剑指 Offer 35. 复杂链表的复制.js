/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    let cur = head;
    let hashMap = new Map();

    while(cur){
        hashMap.set(cur,new Node(cur.val,null,null));
        cur = cur.next;
    }

    cur = head;
    while(cur){
        hashMap.get(cur).next = cur.next ? hashMap.get(cur.next) : null;
        hashMap.get(cur).random = cur.random ? hashMap.get(cur.random) : null;
        cur = cur.next;
    }
    return hashMap.get(head);
}


