import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        text: "",
        id: uniqid(),
      },
      tasks: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeTask = this.removeTask.bind(this);

  }

  handleChange(event) {
    this.setState({
      value: {
        text: event.target.value,
        id: this.state.value.id,
      },
    });
  }

  handleSubmit(event) {
    this.setState((state, props) => {
      return {
        tasks: state.tasks.concat(state.value),
        value: {
          text: "",
          id: uniqid(),
        },
      };
    });

    event.preventDefault();
  }

  removeTask(taskID) {
    //console.log(taskID)
    const task = this.state.tasks.find(element => {
      return element.id === taskID;
    })
    console.log(task);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Task:
            <input
              type="text"
              value={this.state.value.text}
              onChange={this.handleChange}
              name="taskInput"
            ></input>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
        <Overview tasks={this.state.tasks} removeTask={this.removeTask}></Overview>
      </div>
    );
  }
}

export default App;
