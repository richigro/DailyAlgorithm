// this algorithm is done in-place meaning that it will mutate its input array
// also this algorithm is not very performant at scale
// O(n^2) Time and O(1) Space 
const selectionSort = function(array) {
  //loop for every item on the list
  for(let i = 0; i < array.length; i++){
    let idxOfSmallest = i;
    for(let j = i + 1; j < array.length; j++){
      // console.log(i,j);
      if(array[j] < array[idxOfSmallest]){
        //make the new smallest the new index
        idxOfSmallest = j;
      }
    }
    swap(array, i, idxOfSmallest);
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
const myArr = [34, 22, 10, 19, 17];

console.log(selectionSort(myArr));
