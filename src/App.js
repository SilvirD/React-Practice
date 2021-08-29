import { useState } from "react";
import "./App.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const TODO_LIST = [
  { id: 1, title: "I learn ReactJS" },
  { id: 2, title: "I learn Redux" },
  { id: 3, title: "I learn React Hooks" },
];

function App() {
  const [todoList, setTodoList] = useState(TODO_LIST);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log("Form submit: ", formValues);

    //add new todo to current todo list
    const newTodo = {
      id: Math.random() * 100,
      ...formValues,
    };
    const newTodoList = [...todoList];

    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>React Hooks - Todo List</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
