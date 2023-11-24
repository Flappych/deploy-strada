import { elementsFromHTML } from "./getElements.js";
import { taskList, operations, STATUSES } from "./todoLogic.js";


const highTasks = [];
const lowTasks = [];

export function render(array) {
  elementsFromHTML.highParent.textContent = "";
  elementsFromHTML.lowParent.textContent = "";

  for (let element of array) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.insertAdjacentText("beforeend", element.name);
    button.insertAdjacentText("beforeend", "+");

    li.classList.add("container-task");
    li.setAttribute("id", element.id);
    input.setAttribute("type", "checkbox");
    if (element.status === STATUSES.TODO) {
      input.checked = false;
    } else {
      input.checked = true;
    }

    input.classList.add('status');
    span.classList.add("task-name");
    button.classList.add("cross-remove");

    li.insertAdjacentElement("beforeend", input);
    li.insertAdjacentElement("beforeend", span);
    li.insertAdjacentElement("beforeend", button);
    input.addEventListener("click", operations.changeStatus);
    button.addEventListener("click", operations.deleteTask);
    if (element.priority === "high") {
      elementsFromHTML.highParent.insertAdjacentElement("beforeend", li);
    } else {
      elementsFromHTML.lowParent.insertAdjacentElement("beforeend", li);
    }
  }
}



function randomID(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
