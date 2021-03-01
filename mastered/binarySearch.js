//binary search divide and conquer O(log n) time O(1) space
var search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  let guess;
  
  while(low <= high) {
      mid = Math.floor((low + high) / 2);
      guess = nums[mid];
      if(guess === target){
         return mid;
      } else if(guess > target){
        high = mid - 1;  
      } else {
        low = mid + 1;
      }
  }
  return -1;
};