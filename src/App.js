import React, { Component } from 'react';
import Todos from './Todos.js'
import AddTodo from './AddForm.js'

class App extends Component {
  state = {
    todos: [
    
    ]
  }
  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id
    })
    this.setState({
      todos:todos
    })
  }
  addTodo = (todo) =>{
    todo.id =Math.random()
    let todos = [...this.state.todos,todo]
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className='App container'>
        <h1 className='center blue-text'>TodoList App</h1>
        <h3 className='center red-text'>Please Add Your Content!</h3>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos= {this.state.todos} deleteTodo = {this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
