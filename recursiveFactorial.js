//Really simple recursion
const recursiveFactorial = function(n){
  //Base case to stop recursion
  if(n === 1){
    return 1;
  } else {
    // Recursive case
    return n * recursiveFactorial(n - 1);
  }
};

// Call stack example for passed in 5
// bottom of stack ---> [[f(5)], [f(4)], [f(3)], [f(2)], [f(1)]] <-- top of stack
//                                                     [[] ] <-- popped off the stack 
console.log(recursiveFactorial(5));