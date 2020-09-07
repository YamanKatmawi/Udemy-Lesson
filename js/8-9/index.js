let obj = {
  name: "chuck",
  age: 45,
  isCool: false,
  friends: ["bob", "tina"],
  add: function (x, y) {
    return x + y;
  },
};
console.log(obj.add(10, 5));
////////// THe keyword (this)//////
let comments = {};
comments.data = ["Good job", "bye", "Lame..."];
console.log(comments);
function print(arr) {
  arr.forEach(function (el) {
    //element
    console.log(el);
  });
}
console.log(print(comments.data));
///
comments.print = function () {
  this.data.forEach(function (el) {
    //element
    console.log(el);
  });
};
