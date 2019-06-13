import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  IMPORTANT_TASK,
  CHANGE_FILTER
} from "../constants";

export const addTask = (id, text, isCompleted, isImportant) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted,
  isImportant
});
export const addMouseTask = (id, text, isCompleted, isImportant) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted,
  isImportant
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id
});

export const importantTask = id => ({
  type: IMPORTANT_TASK,
  id
});
export const changeFilter = activeFilter => ({
  type: CHANGE_FILTER,
  activeFilter
});
