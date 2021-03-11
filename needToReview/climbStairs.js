// this problem is solved using recursion
// but doing that it will have an O(2^n) runtimetime
//very bad for very large inputs

//Look at the following video for more context
/*
  https://www.youtube.com/watch?v=NFJ3m9a1oJQ&ab_channel=BackToBackSWE

  this solution is basically a fibonacci sequence
*/
// var climbStairs = function(n) {
//   if(n === 0){
//       return 1;
//   } else if(n === 1){
//       return 1;
//   } else {
//       return climbStairs(n - 1) + climbStairs( n - 2);
//   }
// };

// console.log(climbStairs(45));

//Below is a much better solution 
// runtime O(n) spcae O(n)
// this solution uses memoization

// var climbStairs = function(n) {
//   var memo = new Array(n + 1);
//   //base cases
//   memo[0] = 1;
//   memo[1] = 1;
//   console.log(memo);

//   //fill the rest of the array
//   for(let i = 2; i < memo.length; i++){
//       memo[i] = memo[i - 2] + memo[i - 1];
//   }
//   console.log(memo);
//   return memo[memo.length - 1];
// };

//completed with basic dynamic programming
// this solution O(n) time and O(n) space
//basically Fibonacci 
var climbStairs = function(n) {
    
   var countSteps = function(steps, obj){
       //base case
       if(steps < 0){
          return 0;
       } 
       //base case
       if(steps === 0){
           return 1;
       }
       //if already calculated 
       //lookup the stored result
       if(obj[steps]){
          return obj[steps];
        }
       
        //If we haven't seen this problem 
        // solve it
        //  then store it in the obj
        obj[steps] = countSteps(steps - 1, obj) + countSteps(steps - 2, obj);
        // after storing return the result
        return obj[steps];
   };
    
    return countSteps(n, {});
};

console.log(climbStairs(2));
