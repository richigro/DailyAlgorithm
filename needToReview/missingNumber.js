// come up with a solution with a linear runtime and 
// constant space
//shoot for: Space O(1) and Time O(n)
var missingNumber = function(nums) {
  let n = nums.length;
  
  while(nums.indexOf(n) > -1){   
      n--;
  }
  
  return n;
  // this solution is O(n^2) runtime
  // O(1) Space
};