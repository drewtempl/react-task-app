import React, { Component } from "react";

class Overview extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(event) {
        this.props.removeTask(event.target.id);
    }

    render() {
        const taskList = this.props.tasks.map((task) => 
            <li key={task.id}>
                {task.text}
                <button onClick={this.delete} id={task.id}>delete task</button>
            </li>
        );

        return (
            <ul>{taskList}</ul>      
        );
    }
}

export default Overview;