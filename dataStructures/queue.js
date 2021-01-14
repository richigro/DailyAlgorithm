//implementing a simple queue(not priority queu)
//implemented with linked list for better performance
//when dequeing O(1) and enqueing O(1)
//This is written with JavasScipt's functional pattern

var Node = function(val, next=null) {
  this.value = val;
  this.next = next;
};

var Queue = function() {

  this.head = null;
  this.tail = null;
  this.size = 0;

  // this will duplicate methods in memory for 
  // each instance of a Queue, but that is how this 
  // functional pattern works, later I will implement 
  // this Queue with a functional-shared pattern that 
  // addresses this specific problem of duplicating methods 
  // in memory

  //Time complexity O(1)
  this.enqueue = function(value){
    // Create a new node
    var newNode = new Node(value);
    // if queue is empty 
    //point head nad tail to new node
    if(!this.size){
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

    this.size++;
  };

  //Time complexity O(1)
  this.dequeue = function(){
    //keep tarck of the old head
    var oldHead = this.head;
    //if the queue is empty return undefined
    if(!this.size){
      console.log("The Queue is already empty!");
      return undefined;
    } else {
      //change the new head the next node
      // if there is no next node it will default back to
      // null
      this.head = oldHead.next;
    }
    //decrement the size of the queue
    this.size--;
    //return the value from the removed node
    return oldHead.value;
  };
  // Time complexity O(1)
  // this.size = function(){
  //   return this.size;
  // };

};

var myQueue = new Queue();
// var newNode = new Node(5);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue);
console.log("Should return the head: ", myQueue.dequeue());
console.log(myQueue);