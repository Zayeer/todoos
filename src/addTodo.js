import React from "react";

function AddTodo(props) {
  return (
    <form className="add-todo" onSubmit={props.addTaskToList}>
      <input
        type="text"
        placeholder="Task"
        className="task-name"
        minlength="1"
        maxlength="20"
      />
      <input type="submit" value="Add" className="submit-todo" />
    </form>
  );
}

export default AddTodo;
