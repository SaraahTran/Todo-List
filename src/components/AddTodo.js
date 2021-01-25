import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {

  const [newTodo, setNewTodo] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          className="enter-a-todo"
          type="text"
          name="title"
          placeholder="Enter a Todo..."
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          className="btn"
          type="submit"
          value="Add Todo"
        /> 
      </div>
    </form>
  );
};

export default AddTodo;