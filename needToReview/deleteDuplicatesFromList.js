//simply change the pointers of each node if the 
//current node equal the next node's value.
var deleteDuplicates = function(head) {
  let currentNode = head;
    
  while(currentNode !== null && currentNode.next !== null){
     if(currentNode.val === currentNode.next.val) {
        currentNode.next = currentNode.next.next;   
     } else {
       currentNode = currentNode.next;  
     }
      
    } 
     
    return head;
};
