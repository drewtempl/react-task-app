import React, { useState } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

function App() {
  const [value, setValue] = useState({ text: "", id: uniqid() });
  const [tasks, setTasks] = useState([]);

  function removeTask(taskID) {    
    const task = tasks.find(element => {
      return element.id === taskID;
    })
    const index = tasks.indexOf(task);
    setTasks(tasks.slice(0, index).concat(tasks.slice(index + 1)))
  }

  return (
    <div>
      <form
        onSubmit={e => {
          setTasks(tasks.concat(value));
          setValue({ text: "", id: uniqid() });
          e.preventDefault();
        }}
      >
        <label>
          Task:
          <input
            type="text"
            value={value.text}
            onChange={e => setValue({ text: e.target.value, id: value.id })}
            name="taskInput"
          ></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
      <Overview tasks={tasks} removeTask={removeTask}></Overview>
    </div>
  );
}

export default App;
