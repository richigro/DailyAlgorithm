//Time complexity O(n)
//Space complexity O(1)
var middleNode = function(head) {
  let fastPointer = head;
  let slowPointer = head;
  
  // by the time the fast pointer reaches the end of the linked list
  // the slow pointer will be at the middle everytime
  while(fastPointer !== null && fastPointer.next !== null){
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;
  }
  // return the middle
  return slowPointer;
};