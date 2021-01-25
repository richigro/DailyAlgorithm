
//A more Efficient version of multiplicating two 
// number of size n
const karatsubaMultiplication = function(x, y){
  var n = x.toString().length;//4//2//1 | 2
  // console.log("n: ", n);
  var nOfTwo = y.toString().length;//4//2//1 | 2
  if(n === 1 && nOfTwo === 1) {
    //compute the result in one step
    // console.log("x = ", x);
    // console.log("y = ", y);
    // console.table(x, y);
    return x * y;
  }
  var a, b, c, d;
  function hello(x,y){
    var half = Math.round(n / 2);//2//1
    console.log("half: ", half);
    var half2 = Math.round(nOfTwo / 2);
    //compute the first halfs of x                     //ac   | //bd | pq
    a = parseInt(x.toString().substring(0, half));//56//5 | 7    | 
    console.log("a: ", a);                             //ac
    b = parseInt(x.toString().substring(half, n));//78//6 | 8
    console.log("b: ", b);
    //first and second halfs of y                      //ac   | bd
    c = parseInt(y.toString().substring(0, half2));//12//1| 3
    console.log("c: ", c);                                  //ac   | bd
    d = parseInt(y.toString().substring(half2, nOfTwo));//34//2| 4
    console.log("d: ", d);
  }
  var p = a + b; //134//11
    console.log("p: ", p);
  var q = c + d;//46//3
    console.log("q: ", q);
  //run b with original inputs
  hello(x,y);
  //recursive multiplication
  console.log("========================================");
  // var ac = karatsubaMultiplication(a,c);//(56, 12)//(5,1) --> 5
  // console.log("ac = ", ac);
  // var bd = karatsubaMultiplication(b,d);//(78,34)//(8, 4) --> 32
  // console.log("bd: ", bd);
  var pq = karatsubaMultiplication(p,q);//(134, 46)//()
  console.log("pq: ", pq);

  // var adbc = (pq - ac - bd);
  // var adbc = (karatsubaMultiplication(p,q) - karatsubaMultiplication(a,c) - karatsubaMultiplication(b,d)); 
  // console.log("ac = ", ac);
  // return (Math.pow(10, n) * ac + Math.pow(10, n/2) * adbc + bd);
  // return (Math.pow(10, n) * karatsubaMultiplication(a,c) + Math.pow(10, n/2) * (karatsubaMultiplication(p,q) - karatsubaMultiplication(a,c) - karatsubaMultiplication(b,d)) + karatsubaMultiplication(b,d));
};

var numOne = 3141592653589793238462643383279502884197169399375105820974944592;
var numTwo = 2718281828459045235360287471352662497757247093699959574966967627;

console.log(karatsubaMultiplication(5678, 1234));
karatsubaMultiplication(5678,1234);
// console.log(numOne * numTwo);
// var five = 5;
// console.log(five.toString());