let name = "Rusty";
name = "yaman";
console.log(name);
/////////
//Is Even

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(2));
console.log(isEven(5));
/////////
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));
///////
function kebabToSnake(str) {
  let newStr = str.replace(/-/g, "_");
  return newStr;
}
console.log(kebabToSnake("hello-world-again"));
