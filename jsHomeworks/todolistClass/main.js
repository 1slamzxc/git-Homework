class TodoList {
    constructor(elementId) {
      this.element = document.getElementById(elementId);
      this.taskList = [];
    }
  
    addTask(taskText) {
      const task = {
        id: Date.now(),
        text: taskText,
      };
  
      this.taskList.push(task);
      this.renderTasks();
    }
  
    removeTask(taskId) {
      this.taskList = this.taskList.filter(task => task.id !== taskId);
      this.renderTasks();
    }
  
    renderTasks() {
      const taskListElement = document.getElementById('taskList');
      taskListElement.innerHTML = '';
  
      this.taskList.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.setAttribute('data-task-id', task.id);
        li.addEventListener('click', () => this.removeTask(task.id));
        taskListElement.appendChild(li);
      });
    }
  }
  
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      myTodoList.addTask(taskText);
      taskInput.value = '';
    }
  }
  
  const myTodoList = new TodoList('todoApp');
  