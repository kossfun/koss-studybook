var MyQueue = function() {
    this.s1 = []; // 出队存储区
    this.s2 = []; // 入队存储区  
  };
  
  /**
   * Push element x to the back of queue. 
   * @param {number} x
   * @return {void}
   */
  MyQueue.prototype.push = function(x) {
    this.s2.push(x);
  };
  
  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  MyQueue.prototype.pop = function() {
    this.transfer(); // 转移栈中元素
    const ret = this.s1.pop(); // 出队
    return ret;
  };
  
  /**
   * Get the front element.
   * @return {number}
   */
  MyQueue.prototype.peek = function() {
    this.transfer();
    return this.s1[this.s1.length - 1];
  };
  
  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  MyQueue.prototype.empty = function() {
    return this.s1.length === 0 && this.s2.length === 0;
  };
  
  MyQueue.prototype.transfer = function() { // 将s2中的元素添加到s1
    if (this.s1.length > 0) return; // s1中存在元素时说明还可以依次出队
    while (this.s2.length > 0){
      this.s1.push(this.s2.pop());
    }
  };
  
  /**
   * Your MyQueue object will be instantiated and called as such:
   * var obj = new MyQueue()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.peek()
   * var param_4 = obj.empty()
   */
  
  