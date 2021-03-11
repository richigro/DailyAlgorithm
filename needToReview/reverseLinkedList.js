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

/*
   original

   1 -> 2 -> null
   reversed
  1) step 
   prev  head     next
  null <- 1   <-  2

  2nd step
         prev    head    next
  null  <- 1  <-  2

  3rd and last step

                prev     head    next
  null  <- 1  <-  2

  return prev
*/

var reverseList = function(head) {
   //init variables
      let prevNode = null;
      
      // while the head node is not null meaning we have to reached the end of the list
      while (head !== null) {
          //chnage the postion of the nextNode
          let nextNode = head.next;
          //chnage the next pointer of the head point back to the previous node
          head.next = prevNode;
          //move the prevNode to where the head is currently
          prevNode = head;
          //also move the head node
          head = nextNode;
      }
      
      return prevNode;
  };