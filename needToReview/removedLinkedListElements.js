//done without dummy head
var removeElements = function(head, val) {
  while(head !== null && head.val === val){
      head = head.next;  
  }
  
  let currentNode = head;
  
  while(currentNode !== null && currentNode.next !== null) {
    if(currentNode.next.val === val){
       currentNode.next = currentNode.next.next;
    } else {
       currentNode = currentNode.next; 
    }
  }
  
  return head;
};


var removeElements = function(head, val) {
  let dummyHead = new ListNode(-1, head);
  let currentNode = dummyHead;
  
while (currentNode !== null && currentNode.next !== null) {
  if(currentNode.next.val === val){
     currentNode.next = currentNode.next.next;
  } else {
      currentNode = currentNode.next;
  } 
}
  
return dummyHead.next;
};