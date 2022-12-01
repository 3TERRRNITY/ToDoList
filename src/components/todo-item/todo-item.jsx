import React from "react";
import PropTypes from "prop-types";

import "./todo-item.scss";
import { completeTask } from "../../actions/actionCreator";

const ToDoItem = ({ text, isCompleted, removeTask, id, completeTask }) => (
  <li className="todo-item">
    <i
      className={
        isCompleted ? "mark far fa-check-circle" : "mark far fa-circle"
      }
      onClick={() => completeTask(id)}
    />
    <span className={isCompleted ? "completed text" : "text"}>{text}</span>
    <i onClick={() => removeTask(id)} className="fas fa-times" />
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  id: PropTypes.number,
};

ToDoItem.defaultProps = {
  text: "",
  isCompleted: false,
  removeTask: () => {},
  id: 0,
};

export default ToDoItem;
