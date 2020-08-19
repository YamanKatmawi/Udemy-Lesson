// To do list
let todoList = ["buy new turtle"];
let input = prompt("what would you like to do");
//let input = "yaman";
while (input !== "quit") {
  if (input === "list") {
    todoList.forEach(function (todo) {
      //  todo.indexOf(todo);
      console.log(todo);
    });
  } else if (input === "new") {
    let newTodo = prompt("Enter new todoList");
    todoList.push(newTodo);
  }
  input = prompt("what would you like to do");
}
console.log("ok, you quit the app");
