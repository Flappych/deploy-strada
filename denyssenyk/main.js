import {taskList, operations, PRIORITIES} from "./modules/todoLogic.js";
import { elementsFromHTML } from "./modules/getElements.js";
import { render } from "./modules/renderToDo.js";

elementsFromHTML.highForm.addEventListener("submit", addHighTask);
elementsFromHTML.lowForm.addEventListener("submit", addLowTask);
export let inputValue;

function addHighTask(event) {
  event.preventDefault();
  const li = document.createElement("li");
  const input = document.createElement("input");
  const span = document.createElement("span");
  const button = document.createElement("button");
  inputValue = document.getElementById("high-task-input").value;
  operations.addTask(`${inputValue}`, PRIORITIES.HIGH);
  span.insertAdjacentText("beforeend", inputValue);
  button.insertAdjacentText("beforeend", "+");

  li.classList.add("container-task");
  input.setAttribute("type", "checkbox");
  span.classList.add("task-name");
  button.classList.add("cross-remove");

  li.insertAdjacentElement("beforeend", input);
  li.insertAdjacentElement("beforeend", span);
  li.insertAdjacentElement("beforeend", button);
  elementsFromHTML.highParent.insertAdjacentElement("beforeend", li);
  clearInput();
  render(taskList);
}

function addLowTask(event) {
  event.preventDefault();
  const li = document.createElement("li");
  const input = document.createElement("input");
  const span = document.createElement("span");
  const button = document.createElement("button");
  inputValue = document.getElementById("low-task-input").value;
  operations.addTask(`${inputValue}`, PRIORITIES.LOW);
  span.insertAdjacentText("beforeend", inputValue);
  button.insertAdjacentText("beforeend", "+");

  li.classList.add("container-task");

  li.setAttribute("id", randomID);
  input.setAttribute("type", "checkbox");
  span.classList.add("task-name");
  button.classList.add("cross-remove");

  li.insertAdjacentElement("beforeend", input);
  li.insertAdjacentElement("beforeend", span);
  li.insertAdjacentElement("beforeend", button);
  elementsFromHTML.lowParent.insertAdjacentElement("beforeend", li);
  clearInput();

  render(taskList);
}

export function randomID(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function clearInput() {
  elementsFromHTML.highFormInput.value = "";
  elementsFromHTML.lowFormInput.value = "";
}

