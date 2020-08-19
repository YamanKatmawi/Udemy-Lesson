// To do list
let todoList = ["buy new turtle"];
let input = prompt("what would you like to do");
//let input = "yaman";
while (input !== "quit") {
  //handle input
  if (input === "list") {
    todoList.forEach(function (todo) {
      //  todo.indexOf(todo);
      console.log(todo);
    });
  } else if (input === "new") {
    //ask for new todo
    let newTodo = prompt("Enter new todoList");
    //add to todos array
    todoList.push(newTodo);
  }
  //ask again for new input
  input = prompt("what would you like to do");
}
console.log("ok, you quit the app");
