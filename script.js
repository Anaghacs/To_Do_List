function add_item(){
    var taskInput = document.getElementById('input');
    var taskText = taskInput.value.trim();

    if(taskInput.value === ''){
        alert("You must write something!");
    }
    else  {
      // Create an html element using js dom 
      var taskList = document.getElementById('list-item');
      var newTaskItem = document.createElement('li');
      newTaskItem.innerHTML=taskInput.value;
      taskList.appendChild(newTaskItem);
      newTaskItem.textContent = taskText;
     
    
      // Add delete button and delete the html element using dom
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.style.backgroundColor="hsl(0, 100%, 30%)";

      deleteButton.onclick = function() {
        taskList.removeChild(newTaskItem);
      };
      newTaskItem.appendChild(deleteButton);

      // Add update button and update the html element conten using js dom
      var updateButton = document.createElement('button');
      updateButton.textContent = 'Update';
      updateButton.style.backgroundColor="blue";
      updateButton.onclick = function() {
        var updatedText = prompt('Enter updated task:', taskText);
        if (updatedText !== null) {
          newTaskItem.textContent = updatedText;
        }
      };
      newTaskItem.appendChild(updateButton);

      taskList.appendChild(newTaskItem);

      // Clear the input field
      taskInput.value = '';
}   }
