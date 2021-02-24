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