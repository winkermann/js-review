const inputTask = document.querySelector('.input-task');
const btnAddTask = document.querySelector('.btn-add-task');
const listTask = document.querySelector('.list-task');

const createTaskLi = () => {
  const li = document.createElement('li');
  return li;
}

const addTask = (task) => {
  const li = createTaskLi();
  li.innerText = task;
  listTask.appendChild(li);
  deleteTask(li);
  saveTasks();
  clearInput();
}

const clearInput = () => {
  inputTask.value = "";
  inputTask.focus();
}

const deleteTask = (li) => {
  const btnDelete = document.createElement('button');
  btnDelete.classList.add('btn-delete');
  btnDelete.innerText = "Delete";
  li.appendChild(btnDelete)
}

const saveTasks = () => {
  const liTasks = listTask.querySelectorAll('li');
  const tasksList = [];

  for (let task of liTasks) {
    let taskText = task.innerText;
    taskText = taskText.replace('Delete', '').trim();
    tasksList.push(taskText)
  }
  
  const tasksJSON = JSON.stringify(tasksList);
  localStorage.setItem('tasks', tasksJSON);
}

const restoreSavedTasks = () => {
  const tasks = localStorage.getItem('tasks');
  const tasksList = JSON.parse(tasks);

  for(let task of tasksList) {
    addTask(task)
  }
}

document.addEventListener('click', (e) => {
  const el = e.target;

  if (el.classList.contains('btn-add-task')) {
    if (!inputTask.value) return;
    addTask(inputTask.value)
  }

  if (el.classList.contains('btn-delete')) {
    el.parentElement.remove();
    saveTasks();
  }
})


restoreSavedTasks();