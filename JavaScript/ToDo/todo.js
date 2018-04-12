var todos = [];
var input = prompt("what would you like to do?")

while (input !== "quit") {
  if (input === "new"){
    var newToDo = prompt("What do you want to add?")
    todos.push(newToDo);
  } else if (input === "list"){
    console.log("***************")
    todos.forEach(function(item, index){
      console.log(index + ":" + item);
    })
    console.log("***************")
  } else if (input === "delete") {
    var index2delete = prompt("enter the index to delete")
    todos.splice(index2delete,1)
    console.log("***************")
    todos.forEach(function (item, index) {
      console.log(index + ":" + item);
    })
    console.log("***************")
    console.log("the selected item have been removed")
  }

  input = prompt("what would you like to do?")
}

alert("You have chossed to quit the app!")
