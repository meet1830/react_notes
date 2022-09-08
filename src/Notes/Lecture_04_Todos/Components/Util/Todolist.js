import React, { useState } from "react";
import Listitem from "./Listitem";
import "./Todolist.css";

// const todos = [
//   {
//     id: 1,
//     text: "Learn React",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Learn MongoDB",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     text: "Learn Express",
//     isCompleted: true,
//   },
//   {
//     id: 4,
//     text: "Learn Node",
//     isCompleted: false,
//   },
// ];

function Todolist(props) {
  return (
    <div className="items-container">
      {/* rendering based on todos array - hard coded
      <Listitem key={todos[0].id} text={todos[0].text} isCompleted={todos[0].isCompleted} />
      <Listitem key={todos[1].id} text={todos[1].text} isCompleted={todos[1].isCompleted} />
      <Listitem key={todos[2].id} text={todos[2].text} isCompleted={todos[2].isCompleted} />
      <Listitem key={todos[3].id} text={todos[3].text} isCompleted={todos[3].isCompleted} /> */}
      
      {/* Dynamic rendering of the listitems - data driven rendering means if data got changed or items decreased or increased then the items will be updated by itself */}
      {props.todos.map((item) => {
        return <Listitem id={item.id} text={item.text} isCompleted={item.isCompleted} />
      })}
    </div>
  );
}

export default Todolist;
