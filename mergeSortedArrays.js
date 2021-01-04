const mergeSortedArrays = function(sortedArray1, sortedArray2) {
  //edge case, empty array passed in
  if(sortedArray1.length < 0 && sortedArray2.length < 0){
    return [];
  } else if(sortedArray2.length < 0){
    return sortedArray1;
  } else if(sortedArray1.length < 0){
    return sortedArray2;
  }
  const sortedMergedArray = [];

  

 
  return sortedMergedArray;
};

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
