import {
  ADD_TASK,
  COMPLETE_TASK,
  REMOVE_TASK,
  IMPORTANT_TASK
} from "../constants";
import { load } from "redux-localstorage-simple";

let TASKS = load({ namespace: "todo-list" });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
  TASKS = {
    tasks: []
  };
}

const tasks = (
  state = TASKS.tasks,
  { id, text, isCompleted, type, isImportant }
) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: id,
          text: text,
          isCompleted: isCompleted,
          isImportant: isImportant
        }
      ];
    case REMOVE_TASK:
      return [...state].filter(task => task.id !== id);
    case COMPLETE_TASK:
      return [...state].map(task => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
    case IMPORTANT_TASK:
      return [...state].map(task => {
        if (task.id === id) {
          task.isImportant = !task.isImportant;
        }
        return task;
      });
    default:
      return state;
  }
};

export default tasks;
