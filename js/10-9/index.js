let colors = ["red", "orange", "yellow", "green"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
/////////
colors.forEach(function (color) {
  console.log("i like the color " + color);
});
////////////
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (color) {
  if (color % 3 === 0) {
    console.log(color);
  }
});
//////////
let nums = [45, 65, 77, 34];
nums.forEach(function (num) {
  console.log(num);
});
/////
function myForEach(arr, func) {
  // loop through arry
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}
///////////
myForEach(colors, function (color) {
  console.log(color);
});
//
// Array.prototype.myForEach = function (func) {
//   for (let i = 0; i < this.length; i++) {
//     func(this[i]);
//   }
// };
