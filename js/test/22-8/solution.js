// let answer = prompt("are you there yet?");
// while (answer !== "yes" && answer !== "yeah") {
//   answer = prompt("are we there yet?");
// }
// alert("YAH,WE MADE IT!");
///////////////
function printReverse(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
printReverse([3, 6, 2, 5]);
////////////
//isUniForm()///
function isUniform(arr) {
  let first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}
console.log(isUniform([1, 1, 1]));
console.log(isUniform([2, 1, 1]));
////////////
//sumArray()////
function sumArray(arr) {
  let total = 0;
  arr.forEach(function (element) {
    total += element;
  });
  return total;
}
console.log(sumArray([2, 3, 4]));

///max///
function max(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(max([2, 5, 55]));
