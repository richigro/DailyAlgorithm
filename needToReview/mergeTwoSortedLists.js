// problem is very similar to merge sort, but inputs are already sorted
var mergeTwoLists = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let head = dummyHead;
  
  while(l1 !== null && l2 !== null){
      if(l1.val <= l2.val){
         head.next = l1;
         l1 = l1.next;
       } else {
          head.next = l2;
          l2 = l2.next;
      }
      dummyHead = dummyHead.next;
  }
  
  if(l1 !== null) dummyHead.next = l1;
  if(l2 !== null) dummyHead.next = l2;
  
  return head.next;
};