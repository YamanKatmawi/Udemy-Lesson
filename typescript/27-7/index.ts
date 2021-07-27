// let username: string = "yaman";
// alert(username);
// ////
// let msg: string = "hello";
// alert(msg);
// /////
// //function sum(n1, n2, n3, n4) {
//   return n1 + n2 + n3 + n4;
// }
// var r = sum(10, 5, 5, 2);
///////
function sum(...values) {
  var sum = 0;
  for (var n of values) sum += n;
  return sum;
}

var r = sum(10, 5, 5, 10);
console.log(r);
//////
var info = {
  id: 1,
  username: "alxs",
  password: "12344",
};
var { id, username, password } = info;
////
var a = 5;
var b = 10;
[a, b] = [b, a];
