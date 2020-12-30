const threeNumberSum = function (array, targetSum) {
    // Write your code here.
      const answerArray = [];
      const currentSum = 0;
      //mutate array to save memory space in ram
      //sorted in-place
      const sortedInputArray = array.sort();
      // [-8, -6, 1, 2, 5, 6, 12]
      
      for(let i =0; i < sortedInputArray.length; i++){
          for(let j =0; j < sortedInputArray.length; j++){
              for(let k =0; k < sortedInputArray.length; k++){
              // if the combination of all three variable add up to the
                if((sortedInputArray[i] + sortedInputArray[j] + sortedInputArray[k]) === targetSum){
                      //create the array
                      const subArray = [sortedInputArray[i], sortedInputArray[j], sortedInputArray[k]];
                      // sorted sub array
                      const sortedSubArray = subArray.sort();
                      //traverse trhough current answer array
                      // to see if the current sorted sub array is already contained
                      // if it is don't push it again, otherwise push it into answers array
                      for(let z =0; z < answerArray.length; z++){
                          if(answerArray.length === 0){
                              // push the sub array into the answer array
                          answerArray.push(sortedSubArray);
                          } else if(){
                              
                          }
                      }
                      
                      
                      
                  }
              // targetSum then i wil push an array into answer array
              
          }
          }
      }
      
      return answerArray;
  }


//test cases
  threeNumberSum([-8, -6, 1, 2, 5, 6, 12], 0);