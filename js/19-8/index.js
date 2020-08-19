//To do list
let todos = ["Buy new turtle"];
let input = prompt("what would you like to do");
while (input !== "quit") {
  //handle input
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  //Ask again for new input
  input = prompt("what would you like to do");
}
console.log("ok, you quit the app");

function listTodos() {
  console.log("**************");
  todos.forEach(function (todo, i) {
    // todos.indexOf(todo);
    console.log(i + ": " + todo);
  });
  console.log("**************");
}
function addTodo() {
  // ask for new todo
  let newTodo = prompt("Enter new todo");
  //add to todos array
  todos.push(newTodo);
  console.log("Added todo");
}
function deleteTodo() {
  let index = prompt("Enter index of todo delete");
  todos.splice(index, 1);
  console.log("Deleted Todo");
}
