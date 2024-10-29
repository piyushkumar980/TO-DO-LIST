function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dateInput = document.getElementById("dateInput");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;

  // check kiya gya ki tast and date filled h ki nhi
  if (taskText === "") {
      alert("Please enter a task.");
      return;
  }

  if (taskDate === "") {
      alert("Please enter a date.");
      return;
  }

  // new task item bnaya gya
  const li = document.createElement("li");
  li.textContent = `${taskText} - ${taskDate}`;

  //  delete button for the task bnya gya h
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
      taskList.removeChild(li);
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // ab last me input field ko khali krne ke liye
  taskInput.value = "";
  dateInput.value = "";
}
