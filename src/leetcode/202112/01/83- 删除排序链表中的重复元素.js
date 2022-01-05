var deleteDuplicates = function(head) {
    // 找人代跑，保留头指针的位置
    let cur = head;

    // 结束条件， 没有下一个节点就不用比较了
    while (cur && cur.next) {
        // 如果值相同，删除下个节点
        if (cur.val === cur.next.val) {
            // 这一步相当于删除下一个节点
            cur.next = cur.next.next;
        } else {
            // 比对下一个元素和下下个元素
            cur = cur.next;
        }
    }

    return head;
};

