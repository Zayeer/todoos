import React from "react";
import Todo from "./Todo";

class App extends React.Component {
  render() {
    return (
      <div id="container">
        <nav className="nav-container">
          <h1>React Todoos</h1>
        </nav>
        <Todo />
      </div>
    );
  }
}

export default App;
