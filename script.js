function add_item(){
    var taskInput = document.getElementById('input');
    var taskText = taskInput.value.trim();
    
    if(taskInput.value === ''||taskInput.value===" "){
      document.getElementById('username-error').innerHTML="Please enter valid item";
      document.getElementById('username-error').style.display="block";

    }
    else  {
      document.getElementById('username-error').style.display="none";

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
      updateButton.style.backgroundColor="#285eb5";
      
      updateButton.onclick = function()  {
        var updatedText = prompt('Enter updated task:', taskText);
        if (updatedText !== null) {
          newTaskItem.textContent = updatedText;
        }
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.backgroundColor="hsl(0, 100%, 30%)";
        deleteButton.onclick = function() {
          taskList.removeChild(newTaskItem);
        };
        newTaskItem.appendChild(deleteButton);
      };
      newTaskItem.appendChild(updateButton);
      taskList.appendChild(newTaskItem);

      // Clear the input field
      taskInput.value = '';
    }   
}

