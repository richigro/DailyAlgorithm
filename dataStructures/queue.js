//implementing a simple queue(not priority queu)
//implemented with linked list for better performance
//when dequeing O(1) and enqueing O(1)
//This is written with JavasScipt's functional-shared pattern

var Node = function(val, next=null) {
  var someInstance = {};
  someInstance.value = val;
  someInstance.next = next;

  return someInstance;
};

var Queue = function() {
  var someInstance = {};
  someInstance.head = null;
  someInstance.tail = null;
  someInstance.sizeOfQueue = 0;

  //add shared methods
  someInstance.enqueue = Queue.methods.enqueue;
  someInstance.dequeue = Queue.methods.dequeue;
  someInstance.size = Queue.methods.size;
  
  return someInstance;
};

Queue.methods = {
  //Time O(1)
  enqueue: function(value){
    // Create a new node
    var newNode = Node(value);
    // console.log(newNode);
    // if queue is empty 
    //point head nad tail to new node
    if(!this.sizeOfQueue){
      this.head = newNode;
      this.tail = newNode;
    } else {
      //when the queue is not empty
      //push the node to back of the queue
      this.tail.next = newNode;
      // var oldTail = this.tail;
      this.tail = newNode;
      //by pointing last node to new node
      //creates the pointer from the previos tail 
      // to this new tail
    }
    //increment the size
    this.sizeOfQueue++;
  },
  //Time O(1)
  dequeue: function(){
    //keep tarck of the old head
    var oldHead = this.head;
    //if the queue is empty return undefined
    if(!this.sizeOfQueue){
      console.log("The Queue is already empty!");
      return undefined;
    } else {
      //change the new head the next node
      // if there is no next node it will default back to
      // null
      this.head = oldHead.next;
    }
    //decrement the size of the queue
    this.sizeOfQueue--;
    //return the value from the removed node
    return oldHead.value;
  },
  size: function(){
    return this.sizeOfQueue;
  }
};

// var myQueue = Queue();
// console.log("empty: ",myQueue);
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// console.log("3 nodes", myQueue);
// console.log(myQueue.dequeue());
// console.log("1st dequeue ",myQueue);

// export this Queue class to be used in another 
//JavaScript file
module.exports = { Queue };