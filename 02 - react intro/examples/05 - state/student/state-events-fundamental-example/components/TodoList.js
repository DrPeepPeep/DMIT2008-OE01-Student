//State lest us store persistent data across component re-renders, and automate re-rendering whenver that data changes.

import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function TodoList() {
  // First term: The variable that will hold the value
  // Second term: The function that will update the value (is the only thing able to change the value)
  const [todoItem, settodoItem] = useState("");

  const onTodoTextChange = (event) => {
    // call state variables setter w/ new value to write
    settodoItem(event.target.value);
  };

  return <TextField id="standard-basic" label="New todo item" variant="standard" sx={{ width: "100%" }} value={todoItem} onChange={onTodoTextChange} />;
}
