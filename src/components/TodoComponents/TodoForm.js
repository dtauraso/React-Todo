import React from "react";

class TodoForm extends React.Component {

    // doesn't need to take props here
    constructor() {
        super()
        this.state = {
            newTodo: ""
        };
    }

    handleFormChanges = changeEvent => {
        // update state with each keystroke
        // console.log(changeEvent.target.value)
        this.setState({newTodo: changeEvent.target.value})

    }

    // class property to submit form
    handleFormSubmit = submitEvent => {
        submitEvent.preventDefault();
        console.log("submitting")
        console.log(this.state.newTodo)
        // already filled from handleFormChanges
        this.props.addTodo(this.state.newTodo)
        
        // reset data form prepopulates with
        this.setState({
            newTodo: ""
        })

    }

    render() {
        
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input
                        value = {this.state.newTodo}
                        onChange={this.handleFormChanges}
                        type="text"
                        name="todo"
                    ></input>
                    <button>Add</button>
                    <button onClick={this.props.clearCompleted}>Clear Completed</button>

                </form>
            </div>
            

        )
    }
}

export default TodoForm;