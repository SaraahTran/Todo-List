import React, { useState } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';
import uuid from 'uuid';
import Moment from 'react-moment';
import 'moment-timezone';


const date = new Date();

const App = () => {
  const initialTodos = [
    {
      title: 'Take out the trash',
      id: uuid.v4(),
      completed: false
    },
    {
      title: 'Buy groceries',
      id: uuid.v4(),
      completed: false
    },
    {
      title: 'Go to the gym',
      id: uuid.v4(),
      completed: false
    }
  ];

  const [todos, updateTodos] = useState(initialTodos);

  const toggleComplete = (id) => {
    updateTodos([...todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }
    )]);
  };

  const deleteTodo = (id) => {
    updateTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      complete: false
    };
    updateTodos([...todos, newTodo]);
  };

  


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3"><header>
          <h1>Todo List <img width= "30px" height="30px" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/design-checklist.svg"></img></h1>
          <p class="moment"><Moment>{date}</Moment></p>
          <h2><div className="highlight">A simple todo app.</div></h2></header>
          <br></br>
          <div className="todo-container">
            <Todos todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
            <br/>
            <AddTodo addTodo={addTodo}/>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default App;
