// done with two pointers

var maxProfit = function(prices) {
  let highestProfit = 0;
  let left = 0; 
  let right = 1;
  
  while(left < prices.length){
      //make profit ?
      if(prices[left] < prices[right]){
         highestProfit = Math.max(highestProfit, prices[right] - prices[left])
      } else {
          left = right;
      }
      right++;
  }
  
  return highestProfit;
};