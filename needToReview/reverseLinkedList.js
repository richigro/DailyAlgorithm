// this is the iterative solution of the problem
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  let next = null;
   
  while(curr != null) {
     next = curr.next;
      //reverse
      curr.next = prev;
      prev = curr;
      curr = next;
  }
   
   return prev;
};