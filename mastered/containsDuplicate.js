var containsDuplicate = function(nums) {
  let storage = {};
  
  for(let i = 0; i < nums.length; i++){
      let currentNum = nums[i];
      if(storage[currentNum]){
         return true;
      } else {
          storage[currentNum] = 1;
      }
  }
  

 
  return false;
};