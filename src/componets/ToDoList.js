import React, { useState } from "react";
import AddToDo from "./AddToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const [filter, setFilter] = useState(false);
  const [todos, setTodos] = useState([]);

  const addDo = (todo) => {
    if (!todo.text) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeToDo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const swithcfilter = () => {
    setFilter(!filter);
  };

  const comleteTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  return (
    <div className={filter ? "list-filter" : ""}>
      <h1>Какие планы на сегодня?</h1>
      <AddToDo
        onSubmit={addDo}
        setArrlist={setTodos}
        swithcfilter={swithcfilter}
      />
      <ToDo
        todos={todos}
        comleteTodo={comleteTodo}
        removeToDo={removeToDo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default ToDoList;