let input = document.querySelector(".form .input");
let addTask = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
let chkBox = document.querySelector(`input[type="checkbox"]`);
let lbl = document.querySelector("label")
let arr = [];

addTask.onclick = () => {
    if (arr.indexOf(input.value) == -1) {
        arr.push(input.value);

        let task = document.createElement("div");
        task.className = "task";
        task.id = Date.now();
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.id = `${input.value}`;

        let label = document.createElement("label");
        label.setAttribute("for", `${input.value}`)
        label.textContent = `${input.value}`;

        let div = document.createElement("div");
        div.appendChild(checkBox);
        div.appendChild(label);
        task.appendChild(div);

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = Date.now();
        deleteBtn.style.cssText = "color: white;background-color: red;border-radius: 4px;border-color: transparent;";
        task.appendChild(deleteBtn);
        task.style.cssText = "display: flex;justify-content: space-between; margin-bottom: 4px;"
        tasks.appendChild(task);
    } else {
        window.alert("Task is already exsit");
    }
}

chkBox.addEventListener("click", function () {
    if (lbl.classList.contains("lined")) {
        lbl.style.textDecoration = "none";
        lbl.classList.remove("lined");
    } else {
        lbl.style.textDecoration = "line-through";
        lbl.classList.add("lined");
    }
});

deleteBtn.addEventListener("click", (delbtn) =>{
    document.removeChild(`div#${delbtn.className}`);
})