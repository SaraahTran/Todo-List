import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const todoStyle = () => ({
    textDecoration: todo.completed ? 'line-through' : 'none',
    padding: '10px',
    borderBottom: '1px #ccc solid'
  });

  const { id, title } = todo;

  return (
    <div className="input-group input-group-lg mb-3" style={todoStyle()}>
      <input className="checkbox" style={{ width: '20px', height: '20px', margin: '0px 20px 0px 3px', color: 'red'}} type="checkbox"
             onChange={() => toggleComplete(id)}/>
      <p className="lead">{title}</p>
      <button className="remove"
              onClick={() => deleteTodo(id)}>&times;</button>
    </div>
  );
};

export default TodoItem;