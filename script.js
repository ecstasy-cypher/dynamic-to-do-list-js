document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('Add Task')
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener('click', () => {
      taskList.removeChild(li); 
    });

    li.appendChild(removeBtn); 
    taskList.appendChild(li);
    taskInput.value = ''; 
  }

  addButton.addEventListener('click', addTask); // Add event listener for button click

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask(); 
    }
  });

  // Invoke addTask on DOMContentLoaded (optional)
  // addTask(); 
});
