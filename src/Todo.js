import React from "react";
import TodoList from "./todoList";
import AddTodo from "./addTodo";
import TaskDetails from "./taskDetails";
import SortTask from "./sortTasks";
import "./index.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      taskProps: {
        name: "",
        dueDate: "",
        priority: "high",
        desc: "",
      },
      defaultSort: [], //sorted in insertion time order
    };

    this.addTaskToList = this.addTaskToList.bind(this);
    this.duplicateTask = this.duplicateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.displayTaskDetails = this.displayTaskDetails.bind(this);
    this.updateTaskDetails = this.updateTaskDetails.bind(this);
    this.saveData = this.saveData.bind(this);
    this.getSavedData = this.getSavedData.bind(this);
    this.closeTaskDetails = this.closeTaskDetails.bind(this);
    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.changeTaskColor = this.changeTaskColor.bind(this);
    this.taskTextStyling = this.taskTextStyling.bind(this);
    this.sortTodos = this.sortTodos.bind(this);
    this.sortByAlphabets = this.sortByAlphabets.bind(this);
    this.sortByPriority = this.sortByPriority.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
  }

  //add new task to tasks list
  addTaskToList(event) {
    event.preventDefault();
    const taskTitle = document.querySelector(".task-name");
    if (!this.duplicateTask(taskTitle.value) && taskTitle.value.length > 0) {
      const newTask = {
        taskTitle: taskTitle.value,
        dueDate: "",
        priority: "high",
        desc: "",
        checked: false,
      };
      this.setState((state) => {
        const todos = state.todos.concat([newTask]);
        const defaultSort = state.defaultSort.concat([newTask]);
        return {
          todos,
          defaultSort,
        };
      });
    }
    event.currentTarget.reset();
  }

  //check for duplicate tasks
  duplicateTask(task) {
    return this.state.todos.some(
      (todo) => todo.taskTitle.toLowerCase() === task.toLowerCase()
    );
  }

  //display task details menu
  displayTaskDetails(event) {
    const taskDetailBg = document.querySelector(".taskDetail-bg");
    if (
      event.target !== event.currentTarget.children[0] &&
      event.target !== event.currentTarget.children[3] &&
      event.target !== event.currentTarget.children[3].children[0]
    ) {
      taskDetailBg.style.display = "grid";
      for (let i = 0; i < this.state.todos.length; i++) {
        if (
          this.state.todos[i].taskTitle.toLowerCase() ===
          event.currentTarget.getAttribute("data-task").toLowerCase()
        ) {
          this.setState({
            taskProps: {
              name: this.state.todos[i].taskTitle,
              dueDate: this.state.todos[i].dueDate,
              priority: this.state.todos[i].priority,
              desc: this.state.todos[i].desc,
            },
          });
          break;
        }
      }
    }
  }

  //change state based on checked value
  checkboxHandler(event) {
    const checkBox = event.target;
    this.taskTextStyling(checkBox);
    const task = event.target.parentElement;
    this.setState((state) => {
      let todos = [...state.todos];
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].taskTitle === task.getAttribute("data-task")) {
          if (checkBox.checked) {
            todos[i].checked = true;
            break;
          } else {
            todos[i].checked = false;
            break;
          }
        }
      }
      return {
        todos,
      };
    });
  }

  //add line-through style to the task name and date if the task is checked
  taskTextStyling(checkbox) {
    if (checkbox.checked) {
      checkbox.nextElementSibling.style.textDecoration = "line-through";
    } else {
      checkbox.nextElementSibling.style.textDecoration = "none";
    }
  }

  //updates todos state property based on input from task details menu
  //if priority field is updated, then make a call to changeTaskColor function
  updateTaskDetails(event) {
    event.preventDefault();
    const target = event.target;
    this.setState((state) => {
      const todos = state.todos;
      const taskProps = state.taskProps;
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].taskTitle === state.taskProps.name) {
          todos[i][target.getAttribute("id")] = target.value;
          taskProps[target.getAttribute("id")] = target.value;
          if (target === document.querySelector("#priority")) {
            this.changeTaskColor(todos[i]);
          }
          break;
        }
      }
      return {
        todos,
        taskProps,
      };
    });
  }

  changeTaskColor(task) {
    const taskDetail = document.querySelector(".task-detail");
    const taskList = document.querySelectorAll(".task");
    for (let i = 0; i < taskList.length; i++) {
      if (
        taskList[i].getAttribute("data-task").toLowerCase() ===
        task.taskTitle.toLowerCase()
      ) {
        if (task.priority === "medium") {
          taskList[i].style.backgroundColor = "#FFA500";
          taskDetail.style.backgroundColor = "#FFA500";
        } else if (task.priority === "low") {
          taskList[i].style.backgroundColor = "#00FA9A";
          taskDetail.style.backgroundColor = "#00FA9A";
        } else {
          taskList[i].style.backgroundColor = "#B22222";
          taskDetail.style.backgroundColor = "#B22222";
        }
      }
    }
  }

  //closes task details menu
  closeTaskDetails(event) {
    if (event.target === event.currentTarget) {
      const taskDetailBg = document.querySelector(".taskDetail-bg");
      const taskDetail = document.querySelector(".task-detail");
      taskDetail.reset();
      taskDetailBg.style.display = "none";
    }
  }

  //deletes the task
  deleteTask(event) {
    let parent; //since the delete icon is svg, which has path as its child element
    if (event.target.parentElement.className === "task") {
      parent = event.target.parentElement;
    } else {
      parent = event.target.parentElement.parentElement;
    }
    this.setState((state) => {
      const todos = state.todos;
      const defaultSort = state.defaultSort;
      for (let i = 0; i < state.todos.length; i++) {
        if (
          todos[i].taskTitle.toLowerCase() ===
          parent.getAttribute("data-task").toLowerCase()
        ) {
          defaultSort.splice(defaultSort.indexOf(todos[i]), 1);
          todos.splice(i, 1);
          break;
        }
      }
      parent.style.display = "none";
      return {
        todos,
        defaultSort,
      };
    });
  }

  //save data to local storage
  saveData(event) {
    if (this.state.todos.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(this.state.defaultSort));
    } else {
      localStorage.removeItem("tasks");
    }
  }

  //access saved data from local storage
  getSavedData() {
    const todos = JSON.parse(localStorage.getItem("tasks"));
    if (todos) {
      const defaultSort = [...todos];
      this.setState({
        todos,
        defaultSort,
      });

      //apply the bg color of each todo based on priority
      todos.forEach((todo) => {
        if (todo.priority !== "high") {
          this.changeTaskColor(todo);
        }
      });

      //apply styling appropriately to tasks with checked status
      const checkBoxes = document.querySelectorAll("input[type=checkbox]");
      todos.forEach((todo) => {
        if (todo.checked) {
          for (let i = 0; i < checkBoxes.length; i++) {
            const task = checkBoxes[i].parentElement;
            if (task.getAttribute("data-task") === todo.taskTitle) {
              checkBoxes[i].checked = true;
              this.taskTextStyling(checkBoxes[i]);
              break;
            }
          }
        }
      });
    }
  }

  sortTodos(event) {
    let selection = event.target.innerText;
    this.setState((state) => {
      let todos;
      let unSorted;
      if (selection === "Sort by alphabets") {
        unSorted = state.todos;
        todos = this.sortByAlphabets(unSorted);
        return {
          todos,
        };
      } else if (selection === "Sort by priority") {
        unSorted = state.todos;
        todos = this.sortByPriority(unSorted);
        return {
          todos,
        };
      } else if (selection === "Sort by date") {
        unSorted = state.todos;
        todos = this.sortByDate(unSorted);
        return {
          todos,
        };
      } else {
        todos = [...this.state.defaultSort];
        return {
          todos,
        };
      }
    });
  }

  sortByAlphabets(unSorted) {
    const sorted = [];
    let todoTitles = [];
    unSorted.forEach((todo) => {
      todoTitles.push(todo.taskTitle);
    });
    todoTitles.sort();
    unSorted.forEach((todo) => {
      sorted[todoTitles.indexOf(todo.taskTitle)] = todo;
    });
    return sorted;
  }

  sortByPriority(unSorted) {
    const highPriority = unSorted.filter((todo) => todo.priority === "high");
    const mediumPriority = unSorted.filter(
      (todo) => todo.priority === "medium"
    );
    const lowPriority = unSorted.filter((todo) => todo.priority === "low");
    const sorted = [...highPriority, ...mediumPriority, ...lowPriority];
    return sorted;
  }

  sortByDate(unSorted) {
    const noDateTodos = unSorted.filter((todo) => todo.dueDate === "");
    const datedTodos = unSorted.filter((todo) => todo.dueDate !== "");
    const unSortedDates = [];
    datedTodos.forEach((todo) =>
      unSortedDates.push(new Date(todo.dueDate).getTime())
    );
    unSortedDates.sort((a, b) => a - b);
    const sortedDates = unSortedDates.map((date) => {
      const year = new Date(date).getFullYear();
      const month = ("0" + (new Date(date).getMonth() + 1)).slice(-2);
      const dueDate = ("0" + new Date(date).getDate()).slice(-2);
      return year + "-" + month + "-" + dueDate;
    });
    const sorted = [];
    const uniqueSortedDates = [...new Set(sortedDates)];
    for (let i = 0; i < uniqueSortedDates.length; i++) {
      for (let j = 0; j < datedTodos.length; j++) {
        if (uniqueSortedDates[i] === datedTodos[j].dueDate) {
          sorted.push(datedTodos[j]);
        } else {
          continue;
        }
      }
    }
    return sorted.concat(noDateTodos);
  }

  componentDidMount() {
    window.addEventListener("load", this.getSavedData);
    window.addEventListener("beforeunload", this.saveData);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.getSavedData);
    window.removeEventListener("beforeunload", this.saveData);
  }

  render() {
    const { name, dueDate, priority, desc } = this.state.taskProps;
    return (
      <div className="todo-container">
        <AddTodo addTaskToList={this.addTaskToList} />
        <SortTask sortTodos={this.sortTodos} />
        <TodoList
          deleteTask={this.deleteTask}
          displayTaskDetails={this.displayTaskDetails}
          checkboxHandler={this.checkboxHandler}
          bgColor={this.state.bgColor}
          todos={this.state.todos}
        />
        <TaskDetails
          taskTitle={name}
          dueDate={dueDate}
          priority={priority}
          desc={desc}
          input={this.updateTaskDetails}
          closeMenu={this.closeTaskDetails}
          checkboxHandler={this.checkboxHandler}
        />
      </div>
    );
  }
}

export default Todo;
