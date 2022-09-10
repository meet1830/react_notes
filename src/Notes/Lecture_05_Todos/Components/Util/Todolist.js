import Listitem from "./Listitem";
import "./Todolist.css";
import { useState } from "react";

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

function Todolist() {
  // state variable
  const [todos, setTodos] = useState([
  ]);
  // initially an empty array, when add events will be pushed to this array

  // creating another state to save one single todo
  // todo input
  const [todoInput, setTodoInput] = useState('');

  const handleInput = (e) => {
    setTodoInput(e.target.value)
  }

  const handleClick = () => {
    setTodos([...todos, {id: todos.length + 1, text: todoInput, isCompleted: false}])
    // creating a new array and spreading previous todos data and then adding a new object in the array of objects
    setTodoInput('')
  }

  return (
    <div className="items-container">
      {/* rendering based on todos array - hard coded
      <Listitem key={todos[0].id} text={todos[0].text} isCompleted={todos[0].isCompleted} />
      <Listitem key={todos[1].id} text={todos[1].text} isCompleted={todos[1].isCompleted} />
      <Listitem key={todos[2].id} text={todos[2].text} isCompleted={todos[2].isCompleted} />
      <Listitem key={todos[3].id} text={todos[3].text} isCompleted={todos[3].isCompleted} /> */}

      {/* Todo form */}
      <input type="text" placeholder="Add a todo" onChange={handleInput} value={todoInput}></input>
      <button onClick={handleClick}>Add todo</button>

      {/* Dynamic rendering of the listitems - data driven rendering means if data got changed or items decreased or increased then the items will be updated by itself */}
      {todos.map((item) =><Listitem text={item.text} />)}
    </div>
  );
}

export default Todolist;
