import React from "react";
import PropTypes from "prop-types";

import "./todo-item.css";

const ToDoItem = ({
  text,
  isCompleted,
  id,
  removeTask,
  completeTask,
  importantTask
}) => (
  <li className="todo-item">
    <i
      onClick={() => completeTask(id)}
      className={
        isCompleted ? "mark far fa-check-circle" : "mark far fa-circle"
      }
    />
    <span className={isCompleted ? "completed text" : "text"}>{text}</span>
    <span className="test-flex">
      <i onClick={() => removeTask(id)} className="fas fa-times" />
    </span>
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  isImportant: PropTypes.bool,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  importantTask: PropTypes.func,
  id: PropTypes.number
};

ToDoItem.defaultProps = {
  text: "",
  isCompleted: false,
  isImportant: false,
  removeTask: () => {},
  completeTask: () => {},
  importantTask: () => {},
  id: 0
};

export default ToDoItem;
