var fizzBuzz = function(n) {
    //array containing integet from 1 to n
    const answerArr = [];
    
    for(let i = 1; i < n + 1; i++){
       if(i % 3 === 0 && i % 5 === 0){
          answerArr.push("FizzBuzz");  
        } else if(i % 3 === 0){
          answerArr.push("Fizz");
        }else if(i % 5 === 0){
          answerArr.push("Buzz");     
        } else {
            answerArr.push(i.toString());
        }
    }
    
    return answerArr;
    
};