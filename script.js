document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('Add Task')
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); 
    storedTasks.forEach(taskText => addTask(taskText, false)); 
  }

  function addTask(taskText, saveToLocalStorage = true) {
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
      removeTaskFromLocalStorage(taskText); 
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (saveToLocalStorage) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    taskInput.value = '';
  }

  function removeTaskFromLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.filter(storedTask => storedTask !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  loadTasks(); 
});