import React, { Component } from "react";
import PropTypes from "prop-types";

import ToDoInput from "../../components/todo-input/todo-input";
import ToDoList from "../../components/todo-list/todo-list";
import Footer from "../../components/footer/footer";
import {
  addTask,
  removeTask,
  completeTask,
  importantTask,
  changeFilter
} from "../../actions/actionCreator";

import "./todo.css";
import { connect } from "react-redux";

class ToDo extends Component {
  state = {
    taskText: ""
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value
    });
  };

  addTask = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 3 && key === "Enter") {
      const { addTask } = this.props;

      addTask(new Date().getTime(), taskText, false);

      this.setState({
        taskText: ""
      });
    }
  };
  addMouseTask = e => {
    const { taskText } = this.state;

    if (taskText.length > 3) {
      const { addTask } = this.props;

      addTask(new Date().getTime(), taskText, false);

      this.setState({
        taskText: ""
      });
    }
  };

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case "done":
        return tasks.filter(task => task.isCompleted);
      case "active":
        return tasks.filter(task => !task.isCompleted);
      default:
        return tasks;
    }
  };

  getActiveTaskCounter = tasks =>
    tasks.filter(task => !task.isCompleted).length;

  render() {
    const { taskText } = this.state;
    const {
      tasks,
      removeTask,
      completeTask,
      importantTask,
      filters,
      changeFilter
    } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const taskCounter = this.getActiveTaskCounter(tasks);

    return (
      <div className="todo-wrapper">
        <ToDoInput
          onClick={this.addMouseTask}
          onKeyPress={this.addTask}
          onChange={this.handleInputChange}
          value={taskText}
        />
        {isTasksExist && (
          <ToDoList
            tasksList={filteredTasks}
            removeTask={removeTask}
            completeTask={completeTask}
            importantTask={importantTask}
          />
        )}
        {isTasksExist && (
          <Footer
            changeFilter={changeFilter}
            amount={taskCounter}
            activeFilter={filters}
          />
        )}
      </div>
    );
  }
}

ToDo.propTypes = {
  tasks: PropTypes.array,
  removeTask: PropTypes.func,
  addTask: PropTypes.func,
  addMouseTask: PropTypes.func,
  completeTask: PropTypes.func,
  importantTask: PropTypes.func
};

ToDo.defaultProps = {
  tasks: [],
  removeTask: () => {},
  addTask: () => {},
  completeTask: () => {},
  importantTask: () => {}
};

export default connect(
  ({ tasks, filters }) => ({
    tasks,
    filters
  }),
  {
    addTask,
    removeTask,
    completeTask,
    importantTask,
    changeFilter
  }
)(ToDo);
