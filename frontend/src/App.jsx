import React, { useState, useEffect } from "react";
//import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateToDo } from "./components/CreateToDo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setToDos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(data => {
        setToDos(data.todos);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  return (
    <div>
      <div>
        <CreateToDo />
      </div>
      <div>
        <Todos todos={todos}></Todos>
      </div>
    </div>
  );
}

export default App;
