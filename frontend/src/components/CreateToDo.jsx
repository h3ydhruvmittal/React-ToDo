import { useState } from "react";

export function CreateToDo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        id="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Title"
      ></input>
      <br />
      <input
        id="desc"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
        }}
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Description"
      ></input>
      <br />

      <button
        style={{
          margin: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers:{
              "Content-Type": "application/json",
            }
          });
        }}
      >
        Add a ToDo
      </button>
    </div>
  );
}
