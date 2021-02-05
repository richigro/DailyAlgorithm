
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