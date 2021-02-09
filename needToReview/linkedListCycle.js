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