//import './App.css';
import TodoItem from './components/TodoItem';
import { useState } from 'react';

function generateId() {
return "_" + Math.random().toString(36).substr(2,9);
} 

function App() {
  const [todos, setTodos] = useState([
    {id: generateId(), text: "Buy groceries", completed: false},
    {id: generateId(), text: "Do laundry", completed: true},
    {id: generateId(), text: "Walk the dog", completed: false},
  ])

  const [newTodoText, setNewTodoText] = useState("");
  
  const handleInputChange = (event) => setNewTodoText(event.target.value);

  const addTodo = () => {
    if(newTodoText.trim() !== ""){
      setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: generateId(),
          text: newTodoText,
          completed: false,
        },
      ];
    });
      setNewTodoText("");
    }
  };

  const toggleTodo = (id) => {

    setTodos(
      (
      prevTodos
    ) =>
      prevTodos.map(
        (todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  return (
    <div>
      <h1>My To-Do List</h1>
      
      <input
      type='text'
      value={newTodoText}
      onChange={handleInputChange}
      placeholder="Add a new to-do..."
      />
      
      <button onClick={addTodo}>Add Todo</button>
      
      <ul>
        {" "}
        { }
        {todos.map((todo) => (
          <TodoItem 
          key={todo.id} 
          text={todo.text} 
          completed={todo.completed} 
          onToggle={() => toggleTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
