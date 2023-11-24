import { render } from "./renderToDo.js";
import {randomID} from "../main.js";


export const STATUSES = {
  TODO: "To do",
  IN_PROGRESS: "In progress",
  DONE: "Done",
};

export const PRIORITIES = {
  HIGH: "high",
  MID: "middle",
  LOW: "low",
};

export const taskList = [];

export const operations = {
  changeStatus: function changeStatus(event) {
    const elementID = Number(event.target.parentElement.getAttribute('id'))
    const task = taskList.find((task) => task.id === elementID);
    if (event.target.checked) {
      task.status = STATUSES.DONE;
    } else {
      task.status = STATUSES.TODO;
    }

    render(taskList)
  },
  addTask: function addTask(task, priority) {
    let elementID = randomID(1, 9999)
    taskList.push({ name: task, status: STATUSES.TODO, priority: priority, id: elementID});
    render(taskList);
  },
  deleteTask: function deleteTask(event) {
    let index = 0;
    if (event.target.className === "cross-remove") {
      let taskID = Number(event.target.parentElement.getAttribute('id'))
      for (let element of taskList) {
        if (element.id === taskID) {
          taskList.splice(index, 1)
        } else {
          index++;
        }
      }
    }
    render(taskList);
  },
};

// function showList() {
// 	list.forEach((element) => {
// 		switch (element.status) {
// 			case statuses.TODO:
// 				newList.todoList.push(`${element.name}, priority: ${element.priority}`);
// 				break;
// 			case statuses.IN_PROGRESS:
// 				newList.inProgressList.push(
// 					`${element.name}, priority: ${element.priority}`,
// 				);
// 				break;
// 			case statuses.DONE:
// 				newList.doneList.push(`${element.name}, priority: ${element.priority}`);
// 				break;
// 			default:
// 				console.log("error");
// 		}
// 	});
//
// 	if (!newList.todoList.length) {
// 		newList.todoList.push("-");
// 	} else if (!newList.inProgressList.length) {
// 		newList.inProgressList.push("-");
// 	} else if (!newList.doneList.length) {
// 		newList.doneList.push("-");
// 	}
// }
