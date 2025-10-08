let input = document.querySelector(".form .input");
let addTask = document.querySelector(".add");
let tasksContainer = document.querySelector(".tasks");
let arr = [];

window.onload = function () {
  let storedTasks = this.localStorage.getItem("tasks");
  if (storedTasks) {
    arr = JSON.parse(storedTasks);
    arr.forEach((taskText) => {
      addTaskToPage(taskText);
    });
  }
};

addTask.onclick = () => {
  if (input.value !== "" && arr.indexOf(input.value) === -1) {
    addTaskToPage(input.value);
    arr.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(arr));
    input.value = "";
    input.focus();
  } else if (arr.indexOf(input.value) > -1) {
    window.alert("Task already exists!");
  } else {
    window.alert("Please enter a task!");
  }
};

function addTaskToPage(taskText) {
  let taskDiv = document.createElement("div");
  taskDiv.className = "task";

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = `task-${taskText.replace(/\s+/g, "-")}`;
  checkBox.addEventListener("change", function () {
    label.classList.toggle("lined");
  });

  let label = document.createElement("label");
  label.setAttribute("for", `task-${taskText.replace(/\s+/g, "-")}`);
  label.textContent = taskText;

  let div = document.createElement("div");
  div.appendChild(checkBox);
  div.appendChild(label);
  taskDiv.appendChild(div);

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.cssText =
    "color: white;background-color: red;border-radius: 4px;border-color: transparent;";
  deleteBtn.onclick = function () {
    taskDiv.remove();
    arr = arr.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(arr));
  };
  taskDiv.appendChild(deleteBtn);
  taskDiv.style.cssText =
    "display: flex;justify-content: space-between; margin-bottom: 4px;";

  tasksContainer.appendChild(taskDiv);
}
