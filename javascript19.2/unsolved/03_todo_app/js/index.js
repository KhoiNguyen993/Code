// Create event listener to enter items below
$("#enter").on("click", function() {
  var task = $("#todoItem").val();
  $("#todoList").append(
    "<div class='task'>" + task + "<div class='x fas fatimes'></div></div>"
  );
  $("#todoItem").val("");
  console.log(task);
});

// Create event listener to delete items below

// Create event listener to toggle
