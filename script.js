// const addTodo = document.getElementById('')
const todoInput = document.querySelector('.todo__input');
const todoUL = document.getElementById('todo-ul');
const todoClass = document.querySelector('.todoList');
const todoBtn = document.getElementById('todo-button');

const addTodo = (e) => {
  e.preventDefault();
  const todoValue = todoInput.value;
  console.log(todoValue);

  const todoClass = document.createElement('li');
  todoClass.classList.add('todoList-card');

  todoClass.innerHTML = `
  <span>${todoValue}</span> 
  <i class="fas fa-check" id="check"></i>
  <i class="fas fa-trash" id="delete"></i>`;

  todoUL.appendChild(todoClass);
  todoInput.value = '';
};

const checkTodo = (e) => {
  console.log(e.target.classList);

  const checkItem = e.target.classList[1];
  const deleteItem = e.target.classList[1];
  console.log(checkItem);
  console.log(deleteItem);

  //   Check TODO
  if (`${checkItem}` === 'fa-check') {
    const item = e.target.parentElement;
    item.classList.toggle('check');
    // Delete Todo
  } else if (`${deleteItem}` === 'fa-trash') {
    const item = e.target.parentElement;
    item.remove();
  }
};

// EventListener

todoClass.addEventListener('click', checkTodo);
todoBtn.addEventListener('click', addTodo);
