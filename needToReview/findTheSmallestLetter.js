var nextGreatestLetter = function(letters, target) {
  let leftIdx = 0;
  let rightIdx = letters.length;
  
  while (leftIdx < rightIdx) {
    let midIdx = Math.floor( leftIdx + rightIdx / 2 );
      if(letters[midIdx] <= target){
       leftIdx = midIdx + 1;
      } else {
        rightIdx = midIdx;
      }  
  }
  
  return letters[leftIdx % letters.length]
};