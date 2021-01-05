// this algorithm is done in-place meaning that it will mutate its input array
// also this algorithm is not very performant at scale
// O(n^2) Time and O(1) Space 
const selectionSort = function(array) {
 //store first element as the samallest value you've seen so far
 let smallest = ;
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
