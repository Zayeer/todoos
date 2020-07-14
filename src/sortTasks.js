import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: 1, text: "", value: 1 },
  { key: 2, text: "Sort by alphabets", value: 2 },
  { key: 3, text: "Sort by priority", value: 3 },
  { key: 4, text: "Sort by date", value: 4 },
];

function SortTask(props) {
  return (
    <Dropdown
      clearable
      options={options}
      selection
      onChange={props.sortTodos}
    />
  );
}
export default SortTask;
