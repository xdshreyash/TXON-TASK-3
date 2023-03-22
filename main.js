const taskInput = document.getElementById('task');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText !== '') {
      const li = document.createElement('li');
      li.innerHTML = `
        <label>${taskText}</label>
        <input type="checkbox">
        <button class="delete-btn">Delete</button>
      `;
      taskList.appendChild(li);
      taskInput.value = '';
      const deleteBtns = document.querySelectorAll('.delete-btn');
      deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', deleteTask);
      });
    }
  }

  function deleteTask(e) {
    e.target.parentNode.remove();
  }