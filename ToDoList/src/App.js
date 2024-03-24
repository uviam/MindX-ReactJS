import React from "react";
import InputBar from "./components/InputBar.jsx";
import ToDoItems from "./components/ToDoItems.jsx";

const App = () => {
  const items = [
    "Clean up bedroom",
    "Buy some milk",
    "Jogging",
    "Learn React",
    "Doing Exercise",
  ];

  return (
    <div>
      <InputBar />
      {items.map((item, index) => (
        <ToDoItems key={index} toDoText={item} />
      ))}
    </div>
  );
};

export default App;
