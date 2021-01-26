const quickSort = function(arr) {
  //here I describe the simpleplest scenerio that could happend to be passed in
  if(arr.length < 2){
    return arr;
  }
  //a randomly chosen pivot results in less collision and a better chance of having an algorithm that results
  // in O(n * log n) average case, if the randomly chosen pivot is near the end or begining 
  // the algoritm's worst case is O(n^ 2)
  let pivot = arr[Math.floor(arr.length / 2)];
  let pivotIndex = Math.floor(arr.length / 2);  
  let left = [];
  let right = [];

  console.log("pivot now: ", pivot);
  //iterate trough the array and place the numbers in the corrctect location depending on pivot
  for(let i = 0; i < arr.length; i++){
    //if we get to the pivot do not compare it with itself
    if(i === pivotIndex){
      //skip iteration
      continue;
    }
    //if the current number is equal or greater than pivot put in right array
    if(arr[i] >= pivot){
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  console.log("left: ", left);
  console.log("right: ", right);
  return quickSort(left).concat(pivot).concat(quickSort(right));
};

console.log(quickSort([4,6,1,9,2,9]));
// console.log(quickSort([2, 1]));
//quicksort