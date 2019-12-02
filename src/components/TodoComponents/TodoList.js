// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo"

class TodoList extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        console.log("list to display", this.props)
        return(

            <div>
                {this.props.todoList.map((todo, i)=> (
                    <Todo   key={todo.id}
                            name={todo.name}
                            completed={todo.completed}
                            updateTodo={this.props.updateTodo}
                            i={i} />

                ))}
            </div>
        )
    }
}

export default TodoList;