function reorderList(head) {
    if (!head || !head.next) return;
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    // second为后半段需要重排的链表
    let second = slow.next;
    slow.next = null;
    second = reverseList(second);
    let dummy = new ListNode(0);
    let cur = dummy;
    while (head && second) {
      cur.next = head;
      head = head.next;
      cur = cur.next;
      cur.next = second;
      second = second.next;
      cur = cur.next;
    }
    if (head) cur.next = head;
    if (second) cur.next = second;
    return dummy.next;
  }
  
  // 翻转链表
  function reverseList(head) {
    let prev = null;
    while (head) {
      let next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  }
  
  