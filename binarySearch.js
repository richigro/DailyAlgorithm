const binarySearch = function(array, item){
  let low = 0;
  let high = array.length - 1;
  console.log();

  while(low <= high){
    let mid = Math.floor((low + high) / 2);
    let guess = array[mid];
    if( guess === item){
      return mid;
    } else if(guess > item){
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  //if item is not found within the given array
  return null;
};

const createArrayFrom1ToN = function(n){
  const array = [];
  for(let i =0; i < n; i++){
    array.push(i + 1);
  }
  return array;
};

// test with high number 2^32
const testArray = createArrayFrom1ToN(Math.pow(2, 15));

//Should return 69 index, which is the number 68th in the  array
console.time('binarySearch');
console.log(binarySearch(testArray, 30000));
console.timeEnd('binarySearch');

//really inefficient algorithm O(n) worst time complexity
const linearSearch = function(array, item) {
  let guess;
  for(let i = 0; i < array.length; i++){
    guess = array[i];
    if(guess === item){
      return i;
    }
  }
  //if item not found return null
  return null;
};

console.time('linearSearch');
console.log(linearSearch(testArray, 30000));
console.timeEnd('linearSearch');