const temp = document.getElementById("inputTask");
function addTask() {
  if (temp.value == "") {
    alert("enter task plz..");
    return;
  } else {
    const task = temp.value;
    const elementDiv = document.createElement("div");
    elementDiv.textContent = task;
    elementDiv.className = "item";
    document.getElementById("taskListContainer").appendChild(elementDiv);
    temp.value = "";
  }
}
