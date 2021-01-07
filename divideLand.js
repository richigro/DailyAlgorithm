/*
  The goal of this algoritm is to find out how to divide a plot of land evenly into 
  square plots (not rectangular) and you want plots of land to be as big as possible
  that also means having to divide the original plot of land the least times possible while 
  having subplot that are always a square. 
  
  Return the least amount of subplots that the original plot can be divided into while having
  all of them be squares
  */

//given initial plot of land

const divideLand = function(len, width) {
  //varaiable creating num of land plots
  let numberOfPlots = 0;
  // if evenly divided it will be zero, other wise none
  let remainder;
  let divisionResult;
  if(len >= width){
    remainder = len % width;
    divisionResult = Math.floor(len / width);
  } else {
    remainder = width % len;
    divisionResult = Math.floor(width / len);
  }
  // console.log("number of plots so far: ", numberOfPlots);
  // console.log(remainder);
  //base case
  if(remainder === 0){
     numberOfPlots += divisionResult;
     return numberOfPlots;
  } else {
    //add the corresponding number of subplots
    // numberOfPlots += divisionResult;
    //dive the original plot of land into max subplots
    //recursive case
    // console.log("number of plots so far: ", numberOfPlots);
    return divisionResult + divideLand(remainder, width);

  }
};

console.log(divideLand(1680, 720));