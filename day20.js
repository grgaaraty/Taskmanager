const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
    <span>${task.text}</span>
    <div>
        <button class="delete-btn" onclick="deleteTask(${index})">✖</button>
        <button onclick="toggleTask(${index})">✔</button>
    </div>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  if (text === '') return alert('Please enter a task!');
  tasks.push({ text, completed: false });
  saveTasks();
  renderTasks();
  taskInput.value = '';
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

addBtn.addEventListener('click', addTask);
window.addEventListener('load', renderTasks);
