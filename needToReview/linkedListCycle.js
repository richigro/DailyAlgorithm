//partially completed using recursion and 
// a hash map
var hasCycle = function(head) {
  var seen = {};
  var hasCycle;
  
  function traverse(node){
      console.log(node.val);
      if(!node.val){
         hasCycle = false;
          return;
         }
      //base case
      console.log(node.next);
      if(node.next == null){
         hasCycle = false;
          return;
      }
      //add to seen list
      if(seen[node.val]){
          hasCycle = true;
          return;
       } else {
        //add to seen list
      seen[node.val] = true;   
       }
      console.log(seen);
      //otherwise keep on searching
      traverse(node.next);
  }
  traverse(head);
  return hasCycle;
};

//solve using a fast pointer and a slow pointer
// each pointer eventually cathces up to each other
// only if there is a cycle this is 
//O(n) runtime and O(1) space
var hasCycle = function(head) {
  let fastPointer = head;
  let slowPointer = head;
    
  while(fastPointer !== null && fastPointer.next !== null){
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
    //check to see if they match
    if(slowPointer === fastPointer){
     return true;  
    }
  }
    return false;
};