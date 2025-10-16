//your code here
const input = document.getElementById('newTodoInput');
const button = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

button.addEventListener('click', function(){
	const newTodo = input.value.trim();

	if(newTodo === "") return;
	

	const li = document.createElement('li');
	li.textContent = newTodo;

	todoList.appendChild(li);

	input.value = "";
})
