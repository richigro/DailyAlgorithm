// Import the class Queue
var {Queue} = require('./queue.js');

var graph = {
  "you": ["Alice", "Bob", "Claire"],
  "Bob": ["Anuj", "Peggy"],
  "Alice": ["Peggy"],
  "Claire": ["Thom", "Johny"],
  "Anuj": [],
  "Peggy": [],
  "Thom": [],
  "Johny": []
};

var searchForMangoSeller = function(name){
  //create a queue
  var searchQueue = Queue();
  //enqueue each element in the array from you
  // console.log();
  graph[name].forEach( friend => {
    //add each friend to the back of the queue
    searchQueue.enqueue(friend);
  });
  var searched = [];

  console.log(searchQueue.size());
   
   //do the following while the queue is not empty
   while(searchQueue.size() > 0){
    //store the next person in queue in variable
    var friend = searchQueue.dequeue();
    console.log("currently cheking: ", friend);
    //if friend is not included in search array
    // do not search again
    if(!searched.includes(friend)){
      //check to see if current friend is a mango seller
      if(isMangoSeller(friend)){
        //if the friend you are currently looking at is a mango seller
        console.log(`Your friend ${friend} is a mango Seller! \n Done Searching!`);
        //return true to exit the function
        return true;
      } else {
        //if the friend is not a mango seller 
        //add that friend's friends to the queue
        graph[friend].forEach( person => {
          //add to the back of the queue
          searchQueue.enqueue(person);
        });
        //add friend to the searched array
        searched.push(friend);
        console.log("current queue: ", searchQueue);

        //make sure to add that friend to 
      }
    }
   }
   //I the queue is empty it means that we did'nt find
   // a mango seller in your network
   console.log("We couldn't find a mango seller in your network");
   return false;

  // console.log(searchQueue);
};

// if the person's name ends with an m we'll just say
// that they are mango sellers
var isMangoSeller = function(person){
  return person[person.length-1] === 'm';
}; 

searchForMangoSeller("you");