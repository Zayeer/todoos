import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class TodoList extends React.Component {
  render() {
    const allTasks = this.props.todos.map((task) => (
      <Task
        name={task.taskTitle}
        dueDate={task.dueDate}
        key={task.taskTitle}
        dataTask={task.taskTitle}
        deleteTask={this.props.deleteTask}
        displayTaskDetails={this.props.displayTaskDetails}
        checkboxHandler={this.props.checkboxHandler}
        bgColor={this.props.bgColor}
      />
    ));

    return <ul className="todo-list">{allTasks}</ul>;
  }
}

function Task(props) {
  return (
    <li
      className="task"
      data-task={props.dataTask}
      onClick={props.displayTaskDetails}
      style={props.bgColor}
    >
      <input type="checkbox" id="check-task" onClick={props.checkboxHandler} />
      <p id="name">{props.name}</p>
      <p id="date">{props.dueDate}</p>
      <FontAwesomeIcon icon={faTrashAlt} onClick={props.deleteTask} />
    </li>
  );
}

export default TodoList;
