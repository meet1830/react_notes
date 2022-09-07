import Hooks_useState from "./02_Hooks_useState"
import Hooks_useEffect from "./03_Hooks_useEffect"

function App() {
  return (
    <div>
      <Hooks_useState name='om'/>
      <Hooks_useState name='shyam'/>
      <Hooks_useState name='rakesh'/>
      {/* if having same component multiple times then the counter updates to only the value of that component and not all. 
      so conclude that all components have their own state */}

      <Hooks_useEffect/>
    </div>
  )
}

export default App