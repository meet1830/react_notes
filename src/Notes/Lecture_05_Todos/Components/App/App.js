import React from 'react'
import './App.css'
import TodoList from '../Util/Todolist';

// normal variable
// const todos = [
//     {
//       id: 1,
//       text: "Learn React",
//       isCompleted: true,
//     },
//     {
//       id: 2,
//       text: "Learn MongoDB",
//       isCompleted: false,
//     },
//     {
//       id: 3,
//       text: "Learn Express",
//       isCompleted: true,
//     },
//     {
//       id: 4,
//       text: "Learn Node",
//       isCompleted: false,
//     },
//   ];


function App() {
  return (
    <div className='parent-div'>
        <div className='heading-div'>
            <h1>Accio Todo</h1>

            <TodoList />
        </div>
    </div>
  )
}

export default App