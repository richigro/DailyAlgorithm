// problem is very similar to merge sort, but inputs are already sorted

var mergeTwoLists = function(l1, l2) {
  let tempNode = new ListNode(0);
  let currentNode = tempNode; 
  
  while(l1 && l2){
      
     if(l1.val <= l2.val) {
        currentNode.next = l1;
        //move the l1 pointer
        l1 = l1.next;
     } else {
         currentNode.next = l2;
         l2 = l2.next;
     } 
      
      currentNode = currentNode.next;
  }
  
  if(l1){
     currentNode.next = l1;
      l1 = l1.next;
  }
  if(l2){
    currentNode.next = l2;
    l2 = l2.next;
  }
  return tempNode.next;
};