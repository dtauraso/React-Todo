import React, {useEffect} from 'react';
import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"
import "./components/TodoComponents/Todo.css"
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }


  addTodo = newTodoName => {
    // add new item from the form to the todolist
    const newTodoItem = {
      name: newTodoName,
      id: Date.now(),
      completed: false
    };
    console.log(newTodoName)
    this.setState({
      todos: [...this.state.todos, newTodoItem]
    });
  }

  updateTodo = i => {
    console.log("works", i)

    this.state.todos.splice(i, 1, {...this.state.todos[i], completed: true} )

    this.setState({todos: [...this.state.todos]})
    console.log("done", this.state.todos)
    // item.setState({...item, completed: true})
  }
  clearCompleted = () => {

    this.setState({todos: [...this.state.todos.filter(todo => todo.completed === false)]    })

  }
  render() {
    return (
      <div>

        <h1>Todos</h1>
        <TodoList todoList={this.state.todos} updateTodo={this.updateTodo} />
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
