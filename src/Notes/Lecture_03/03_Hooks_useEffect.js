import {useState, useEffect} from 'react'
// useEffect is a watcher. it runs some code when something changes.
// takes two things one is a arrow function and other is a dependency
// if depenndency got changed then code inside useeffect will run

function Hooks_useEffect() {
    const [counter, setCounter] = useState(0);

    // use effect
    useEffect(() => {
        console.log('I am inside useEffect')
    }, [counter])
    // it runs for the first time always when the component renders. hence it will run first time before us doing anything
    // dependencies can be more than one [counter, name, age]
    // but the dependency should have a state or else the useeffect will not run

    return (
      <div>
        {counter}
        <br/>
        <button onClick={() => {setCounter(counter+1);}}>Change me</button>
      </div>
  )
}

export default Hooks_useEffect