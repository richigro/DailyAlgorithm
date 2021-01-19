const mergeSort = function(array) {
  // Write your code here.
	//base case 
	if(array.length === 1){
		return array;
	}
	var low = 0;
	var high = array.length - 1;
	var middle = Math.floor((low + high) / 2);
	//divide the array into two sub arrays
	var left = array.slice(low, middle + 1);
	var right = array.slice(middle + 1, high + 1);
	// console.log(left, right);
	var sortedLeft = mergeSort(left);
	var sortedRight = mergeSort(right);
	
	// console.log(sortedLeft, sortedRight);
	//merge the sorted sub arrays
	return merge(sortedLeft, sortedRight);
};

const merge = function(leftHalf, rightHalf) {
	//created new empty array to store merged sub arrays
	var mergedArray = [];
	//initialize pointer one for each sub array
	var i = 0;
	var j = 0;
	// keep moving pointers until we reach the end of an array
	while( i < leftHalf.length && j < rightHalf.length ) {
		//compare numbers at each of the pointers
		if(leftHalf[i] <= rightHalf[j]) {
			//assign the samllest value into the next index of merged array
			mergedArray.push(leftHalf[i]);
			//increment the pointer to no longer compare the current value
			i++;
		} else {
			//assign the sammellest value into merged array
			mergedArray.push(rightHalf[j]);
			//increment the pointer to no longer compare the same value
			j++
		}
	}
	//this last while loop is done to check if there are any left over numbers in either
	// the rightHalf or leftHalf due to them somethimes beign uneven in length
	
	while(i < leftHalf.length) {// fill up mergedArray with remainin number in leftHalf
		mergedArray.push(leftHalf[i]);
		//increment the pointer for the left half
		i++;
	}
	
	while(j < rightHalf.length) {// fill up mergedArray with remainin number in rightHalf
		mergedArray.push(rightHalf[j]);
		//increment the pointer for the right half
		j++;
	}
	
	return mergedArray;
}

const myUnsortedArray = [
  991,
  -731,
  -882,
  100,
  280,
  -43,
  432,
  771,
  -581,
  180,
  -382,
  -998,
  847,
  80,
  -220,
  680,
  769,
  -75,
  -817,
  366,
  956,
  749,
  471,
  228,
  -435,
  -269,
  652,
  -331,
  -387,
  -657,
  -255,
  382,
  -216,
  -6,
  -163,
  -681,
  980,
  913,
  -169,
  972,
  -523,
  354,
  747,
  805,
  382,
  -827,
  -796,
  372,
  753,
  519,
  906
];

console.log(mergeSort(myUnsortedArray));
