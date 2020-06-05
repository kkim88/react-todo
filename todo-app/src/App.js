import React, { useState } from 'react';
import Form from './Components/Form.jsx'
import './App.css';

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

function App() {
  const [todos, setTodos] = useState([
    {
      text:
        "Fill out todo list",
      isCompleted: false
    },
  ]);

  const addItem = text => {
    const newItem = [...todos, { text }];
    setTodos(newItem);
  };

  const completed = index => {
    const compItem = [...todos];
    compItem[index].isCompleted = true;
    setTodos(compItem);
  };

  const remove = index => {
    const remItem = [...todos];
    remItem.splice(index, 1);
    setTodos(remItem);
  };

  const removeAll = index => {
    const remItem = [...todos];
    remItem.splice(index);
    setTodos(remItem);
  };

  function Todo({ todo, index }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}

        <div>
          <button className="button1" onClick={() => completed(index)}>✓</button>
          <button className="button2" onClick={() => remove(index)}>✗</button>

        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>My Todo List</h1>
      <p>Welcome to the React Todo List! Use the input form and press enter to add to the list. Click the checkmark to mark them as complete and click the x to delete them from the list.</p>
      <div className="list">
        <form />
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completion={completed} remove={remove} />
        ))}
        <Form addItem={addItem} />
        <p></p>
        <center><button className="button3" onClick={() => removeAll()}>Remove All</button></center>
      </div>
    </div>
  );
}

export default App;
