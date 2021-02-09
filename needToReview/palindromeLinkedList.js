//
var isPalindrome = function(head) {
  let fastPointer = head;
  let slowPointer = head;
  
  while(fastPointer !== null && fastPointer.next !== null){
     fastPointer = fastPointer.next.next;
     slowPointer = slowPointer.next;  
   }
  //move the fast pointer back to the head of the linked list
  fastPointer = head;
  //reverse second half of the linked list
  slowPointer = reverse(slowPointer);
  
  // while we have not reached the end of the new reversed linked list
  while(slowPointer !== null){
    // if the values of the reversed linked list an the half of the original
    // linked list do not match eaxctly they is not a palindrome
  if(fastPointer.val !== slowPointer.val){
     // is not a palindrome
      return false;
     }
      //kepp moving the pointer on their respective linked lists by one
      fastPointer = fastPointer.next;
      slowPointer = slowPointer.next;
  }
  
  return true;
};

var reverse = function(head) {
  let prevNode = null;
  
  while(head !== null){
      let nextNode = head.next;
      head.next = prevNode;
      prevNode = head;
      head = nextNode;
  }
  
  return prevNode;
};