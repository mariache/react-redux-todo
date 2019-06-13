import React from "react";
import PropTypes from "prop-types";

import ToDoItem from "../todo-item/todo-item";

import "./todo-list.css";

const ToDoList = ({ tasksList, removeTask, completeTask, importantTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem
        completeTask={completeTask}
        importantTask={importantTask}
        removeTask={removeTask}
        id={id}
        key={id}
        text={text}
        isCompleted={isCompleted}
      />
    ))}
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  importantTask: PropTypes.func
};

ToDoList.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  completeTask: () => {},
  importantTask: () => {}
};

export default ToDoList;
