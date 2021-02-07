//this solutuion takes O(n) Times 
// and O(1) space
//This is an algorithm know as Kadane's algorithm

var maxSubArray = function(nums) {
  let maxSum = nums[0];
  let currentSum = maxSum;
  for(let i = 1; i < nums.length; i++){
      currentSum = Math.max(nums[i] + currentSum, nums[i]);
      maxSum = Math.max(currentSum, maxSum);     
  }
  
  return maxSum;
};