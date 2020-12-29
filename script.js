// const addTodo = document.getElementById('')
const todoInput = document.querySelector('.todo__input');
const todoUL = document.getElementById('todo-ul');
const todoClass = document.querySelector('.todoList');
const todoBtn = document.getElementById('todo-button');

const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close');
const modalInput = document.querySelector('.modal-input');
const modalBtn = document.getElementById('modal-btn');

let tasks = [];

//  Add Todo
const addTodo = (e) => {
  e.preventDefault();
  const todoValue = todoInput.value;
  //   console.log(todoValue);

  const todoLI = document.createElement('li');
  todoLI.classList.add('todoList-card');

  todoLI.innerHTML = `
  <span>${todoValue}</span> 
  <i class="fas fa-check" id="check"></i>
  <i class="fas fa-trash" id="delete"></i>
  <i class="fas fa-edit"></i>`;

  const task = {
    id: parseInt(Math.random() * 1000),
    todo: todoValue,
    isCompleted: false,
  };

  todoLI.classList.add(`${task.id}`);
  todoUL.appendChild(todoLI);
  tasks.push(task);
  todoInput.value = '';

  localStorage.setItem('todo', JSON.stringify(tasks));
};

// Check Todo
const checkTodo = (e) => {
  item = e.target;
  const taskCheck = item.parentElement.classList[1];
  const todoItem = item.parentElement;

  //   Find Todo Item
  tasks.find((e) => {
    // Check Todo Item
    if (e.id === parseInt(taskCheck)) {
      if (`${item.classList[1]}` === 'fa-check') {
        e.isCompleted = !e.isCompleted;
        todoItem.classList.toggle('check');

        // Delete Todo Item
      } else if (`${item.classList[1]}` === 'fa-trash') {
        todoItem.remove();
        tasks = tasks.filter((task) => task.id !== parseInt(e.id));
      } else if (`${item.classList[1]}` === 'fa-edit') {
        modal.classList.add('show-modal');
        modalInput.value = e.todo;
        // e.todo = todoUpdate();
      }
    }
  });
  updateLocalStorage(JSON.stringify(tasks));
};

// Update Local Storage
const updateLocalStorage = (data) => {
  localStorage.setItem('todo', data);
};

// Get Local storage Items
const getLocalStorageTodo = () => {
  let todos;
  if (localStorage.getItem('todo' === null)) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todo'));
  }

  todos.forEach((e) => {
    const todoLI = document.createElement('li');
    todoLI.classList.add('todoList-card');

    todoLI.innerHTML = `
		<span>${e.todo}</span>
			<i class="fas fa-check" id="check"></i>
		<i class="fas fa-trash" id="delete"></i>
		<i class="fas fa-edit"></i>`;

    todoLI.classList.add(`${e.id}`);
    e.isCompleted === true ? todoLI.classList.add('check') : '';
    todoUL.appendChild(todoLI);

    const todo = {
      id: e.id,
      todo: e.todo,
      isCompleted: e.isCompleted,
    };
    tasks.push(todo);
  });
};

const todoUpdate = (e) => {
  e.preventDefault();
  updateTodo = modalInput.value;

  toggleModal();
};

const toggleModal = () => {
  modal.classList.remove('show-modal');
};
// EventListener
document.addEventListener('DOMContentLoaded', getLocalStorageTodo);
todoClass.addEventListener('click', checkTodo);
todoBtn.addEventListener('click', addTodo);
modalCloseBtn.addEventListener('click', toggleModal);
modalBtn.addEventListener('change', todoUpdate);
