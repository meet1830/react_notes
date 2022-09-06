import "./01_0_App.css";
import MyComponent from './Components/01_MyComponent';

// import for normal export
import {myName, myAge} from './Components/01_MyComponent';
// used destructuring for import

import {what} from './Components/01_MyComponent';

import Header from "./Components/02_Header";
import Prop from './Components/03_Props';

function App() {
  const friendName = 'abc';
  const friendAge = '23';
  const friendPlace = 'Delhi';

  return (
    /* if return empty parent div then will give error since every component(App.js is also a component - parent component) inside react need to return at least one element of jsx 
    - inspect elements - root div - parent div - other child divs */
    
    /* fragments -> empty parent divs which do not show up in inspect elements code
    - root div - other child divs -> no wrapper parent div shown 
    - fragments are for wrapping multiple elements inside one wrapper div which has no individual use 
    - fragments are part of react not available in html */
    
    // return () -> if having multiple elements inside the parent div then need to use parenthesis, if only returning one div then do not need as in mycomponent
    <>
      <Header />

      <p>I love computers</p>
      <p>I love computers</p>
      <p>I love computers</p>

      <MyComponent />

      {/* also valid syntax for inserting component */}
      <MyComponent></MyComponent>

      {/* the browser makes a tree for the html file like body and head will be at the top, then parent elements like header footer and section will be below them and child elements will follow and will be joined with their parent elements. this is the real dom. js works on the real dom (dom manipulation). react makes a virtual dom same as the real dom. now if any component value is changed, then it will get changed in the virtual dom. now react will compare both the doms and search for the changes. after finding the changes, it will just change those elements in the real dom. because of this react apps are faster. identifying which things need changes and just changing them. for very big website rerendering takes a lot of time and this makes react faster */}

      <p>{myName}</p>

      <p>{what}</p>

      {/* PROPS: when the component is same and the value changes, like the products on flipkart home page and recommendations. so calling the same component which different values */}
      <p><Prop name='Meet' age='22' place='Vadodara' /></p>

      <p><Prop name='Rita' age='45' /></p>
      {/* if not passed any value then will consider it null and will not print, will not even take the space for it */}

      {/* using variables as values for prop */}
      <p><Prop name={friendName} age={friendAge} place={friendPlace} /></p>
    </>
  );
}

export default App;
