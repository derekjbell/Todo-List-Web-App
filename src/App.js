import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';


import './App.css';

class App extends Component {
  state = {
    todos: [{
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with friends',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }

  // Toggles checkbox boolean value
  checkComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // Deletes Todo items from list when you click 'x'
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

// Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className = "App" >
        <div className="container">
        <Header / >
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos = {this.state.todos}checkComplete = {this.checkComplete}delTodo = {this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
