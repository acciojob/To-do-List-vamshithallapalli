//your code here
const input = document.getElementById('newTodoInput');
const addBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addBtn.addEventListener('click', function(){
	const newTodo = input.value.trim();

	if(newTodo === ""){
		alert("Please enter a todo item before adding!");
        return;
	}

	const li = document.createElement('li');
	li.textContent = newTodo;

	todoList.appendChild(li);

	input.value = "";
})
