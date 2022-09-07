// STATE - USESTATE IN REACT

// event listeners change in syntax from js
// they require arrow functions
// make the button to increase the counter value
// the updated counter value is logging in console but not updating in dom
// for that we need to use hooks, we cannot accomplish this with normal variables
// hooks are properties that make our component customizable

import React, {useState} from 'react'

function Hooks_useState(props) {
  // let counter = 0;

  // useState takes in initial value - returns an array of two values - first is the reactive variable other is the function to change that value
  // through this syntax we create a reactive variable -> it is a variable that implements what we want. result is that whenever that variable gets updated in js it will update the dom as well
  // hence states are justreactve variables. if reactive variables changes, state changes
  let [counter, setCounter] = useState(0);
  // are not changing value hence not giving cannot assign to const error. we are changing the state
  return (
    <div>
      {counter}
      <br/>
      {/* <button onClick={() => {counter++; console.log(counter)}}>Update counter</button> */}
      <button onClick={() => {setCounter(counter+1); console.log(counter)}}>{props.name}</button>
    </div>
  );
}

export default Hooks_useState;

// difference between props and state