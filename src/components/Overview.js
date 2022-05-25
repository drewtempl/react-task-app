import React from "react";

function Overview(props) {
    const taskList = props.tasks.map((task) => 
            <li key={task.id}>
                {task.text}
                <button onClick={()=> props.removeTask(task.id)}>delete task</button>
            </li>
        );
    return (
        <ul>{taskList}</ul> 
    )
}

export default Overview;