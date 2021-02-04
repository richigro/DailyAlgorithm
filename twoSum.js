var twoSum = function(nums, target) {
  let storage = {};

  for(let i =0; i < nums.length; i++){
    if(storage[nums[i]] >= 0) {
      return [storage[nums[i]], i];
    } else {

      storage[target - nums[i]] = i;
    }
  }
};

var array = [2, 7, 10, 8, 12];
var target = 9;

console.log(twoSum(array, target));