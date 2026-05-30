let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function display() {
  let list = document.getElementById("list");
  list.innerHTML = "";
  tasks.forEach((t, i) => {
    list.innerHTML += `<li ondblclick="removeTask(${i})">${t}</li>`;
  });
}
display();

function addTask() {
  let t = document.getElementById("task").value.trim();
  if (t === "") return;
  tasks.push(t);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById("task").value = "";
  display();
}

function removeTask(i) {
  tasks.splice(i, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  display();
}
