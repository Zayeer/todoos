import React from "react";

class TaskDetails extends React.Component {
  render() {
    return (
      <div className="taskDetail-bg" onClick={this.props.closeMenu}>
        <form className="task-detail">
          <h2 id="taskTitle">{this.props.taskTitle}</h2>
          <input
            type="date"
            id="dueDate"
            value={this.props.dueDate}
            onChange={this.props.input}
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
