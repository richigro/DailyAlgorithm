
//Time O(1) Space O(n)
var reverseBits = function(n) {
  let binaryNum = n.toString(2);//base 2
  let binaryArr = binaryNum.split("");
  let reversedBit = binaryArr.reverse();
  //if you just reverse the split 
  //you will loose bits in the process and
  //get the wrong answer
  let diff = 32 - reversedBit.length; 
  
  //add zeroes to the end
  while(diff > 0){
      reversedBit.push(0);
      diff--;
  }
  return parseInt(reversedBit.join(""), 2);
  
};


//Done with bit manipulation
//bit manupulation tecnique
/*
  for refenrence see the folowing video:
  great explanation
  https://www.youtube.com/watch?v=KE5Axm7uzok&ab_channel=NideeshTerapalli
*/
var reverseBits = function(n) {
  let begin = n;
  // let binaryInput = n.toString(2);
  console.log("og number: ",n);
  let str = '';
  for(let i = 0; i < 32; i++){
      str += n & 1;
     n =  n >> 1;
  }
  console.log("a: ", begin.toString(2));
  console.log(parseInt(str,2));
  return parseInt(str,2);
//     for(let i = 1; i < 32; i++){
      
//     }
//     return answer;
};
