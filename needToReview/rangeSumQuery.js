// this is a very easy easy question to solve
// the real difficulty lies in the intuition
// that you must use dynamic programming to make
// the solution more efficient for bigger inputs
var NumArray = function(nums) {
  this.dp = [0];
  
  for(let i =0; i < nums.length; i++){
      this.dp[i + 1] = nums[i] + this.dp[i];
  }
  this.nums = nums;
};

NumArray.prototype.sumRange = function(i, j) {
 return this.dp[j+1] - this.dp[i];
}; 