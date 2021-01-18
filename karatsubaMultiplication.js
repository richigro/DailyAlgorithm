
//A more Efficient version of multiplicating two 
// number of size n
const karatsubaMultiplication = function(x, y){
  var n = x.toString().length;//4//2//1 | 2
  var nOfTwo = y.toString().length;//4//2//1 | 2
  if(n === 1){
    //compute the result in one step
    console.log("x = ", x);
    console.log("y = ", y);
    console.table(x, y);
    return x.y;
  } else {
    var half = Math.round(n / 2);//2//1
    var half2 = Math.round(nOfTwo / 2);
    //compute the first halfs of x
    var a = parseInt(x.toString().substring(0, half));//56//5
    var b = parseInt(x.toString().substring(half, n));//78//6
    //first and second halfs of y
    var c = parseInt(y.toString().substring(0, half2));//12//1
    var d = parseInt(y.toString().substring(half2, nOfTwo));//34//2
    
    var p = a + b; //134//11
    var q = c + d;//46//3

    //recursive multiplication
    console.log("after ac =", ac);
    var ac = karatsubaMultiplication(a,c);//(56, 12)//(5,1) --> 5
    console.log("ac = ", ac);
    // var bd = karatsubaMultiplication(b,d);//(78,34)//
    // var pq = karatsubaMultiplication(p,q);

    // var adbc = (pq - ac - bd); 
  } 
  // console.log("ac = ", ac);
  // return (Math.pow(10, n) * ac + Math.pow(10, n/2) * adbc + bd);
};

console.log("result: ", karatsubaMultiplication(5678, 1234));
var five = 5;
console.log(five.toString());