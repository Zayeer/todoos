import React from "react";

class TaskDetails extends React.Component {
  render() {
    const currentDate = new Date();
    const minDate =
      currentDate.getFullYear() +
      "-" +
      ("0" + (currentDate.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + currentDate.getDate()).slice(-2);
    return (
      <div className="taskDetail-bg" onClick={this.props.closeMenu}>
        <form className="task-detail">
          <h2 id="taskTitle">{this.props.taskTitle}</h2>
          <input
            type="date"
            id="dueDate"
            value={this.props.dueDate}
            onChange={this.props.input}
            min={minDate}
          />
          <select
            id="priority"
            value={this.props.priority}
            onChange={this.props.input}
          >
            <option>high</option>
            <option>medium</option>
            <option>low</option>
          </select>
          <textarea
            placeholder="describe your task..."
            id="desc"
            value={this.props.desc}
            onChange={this.props.input}
          ></textarea>
        </form>
      </div>
    );
  }
}

export default TaskDetails;
