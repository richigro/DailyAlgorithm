// this algorithm is done in-place meaning that it will mutate its input array
// also this algorithm is not very performant at scale
// O(n^2) Time and O(1) Space 
const selectionSort = function(array) {
  let smallest;
  let indexOfSmallest;
  let currentIdx = 0;

 // we are running the loop ince for every element in the array
  while(){
    for(let j = 0; j < array.length; j++){
        smallest = array[j];
        indexOfSmallest = j;
      //find the smallest number in the list
      if(array[j] < smallest){
        //change the value of the smallest number to equal the new smallest
        smallest = array[j];
        //keep track of the index of the smallest element
        indexOfSmallest = j;
      }
    }
    // we need to swap the smallest element on the list for the next item on the sub list
    swap(array, i, indexOfSmallest);
  }
 
  
  return array;
};

const swap = function(array, i, j){
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

//random unsorted array
// const myArr = [3, 5, 8, 24, 10, 90, 12, 35, 456, 90];
const myArr = [19, 44, 38, 5, 47, 15];

console.log(selectionSort(myArr));
