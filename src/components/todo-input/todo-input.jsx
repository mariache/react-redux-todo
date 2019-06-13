import React from "react";
import PropTypes from "prop-types";

import "./todo-input.css";

const ToDoInput = ({ value, onChange, onKeyPress, onClick }) => (
  <div className="todo-input-wrapper">
    <i onClick={onClick} value={value} className="fas fa-plus" />
    <input
      className="todo-input"
      placeholder="Click to add task"
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={value}
    />
  </div>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string
};

ToDoInput.defaultProps = {
  onChange: () => {},
  onClick: () => {},
  onKeyPress: () => {},
  value: ""
};

export default ToDoInput;
