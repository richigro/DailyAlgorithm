//my original solution below
// it works, but times out because its runtime complexity
// is O(n^2) due to the nested loop with indexOf function

// var findDisappearedNumbers = function(nums) {
   
//   let result = [];
//   let count = 1;
//   for(let i =0; i< nums.length; i++){
//       let currentNum = nums[i];
//     if(nums.indexOf(count) === -1){
//       result.push(count);  
//    }  
//       count++;
//   }
//   return result;
// };

//solution foun on youtube O(n) runtime O(1) space
var findDisappearedNumbers = function(nums) {
  let result = [];
   //check every single number
   for(let i =0; i < nums.length; i++){
       let currentNum = nums[i];
       let idx = Math.abs(currentNum) - 1;
       nums[idx] = Math.abs(nums[idx]) * -1;
   }
   
   
   for(let i =0; i < nums.length; i++){
       // if you found a positive number
       // then it means that the index has not yet been visited
       if(nums[i] > 0){
           // push the index plus one
           // to get the number that is missing
          result.push(i + 1);
       }   
   }
   
   return result;
};