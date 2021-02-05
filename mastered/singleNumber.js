//leetcode problem number 136 Single Number
// Done without Bit manipulation
//O(n) Time O(n) Space
var singleNumber = function(nums) {
  let storage = {};
  
  for(let i =0; i < nums.length; i++){
      if(storage[nums[i]]){
         storage[nums[i]]++;
      } else {
          storage[nums[i]] = 1;
      }
  }
  
  for(var key in storage){
      if(storage[key] == 1){
         return key;
         }
  }
  return null;
};

//Done With bit manipulation
//Time O(n) Space O(1)
// this method uses XOR operator
// when initialized at zero it will essentially
// keep track of unique values

var singleNumber = function(nums) {
  let result = 0;
    
    for(let i = 0; i < nums.length; i++){
        result ^= nums[i];
    }
    
   return result; 
};