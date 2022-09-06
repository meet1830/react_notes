import "./01_0_App.css";
import MyComponent from "./01_1_MyComponent";
import AnotherComponent from "./01_2_AnotherComponent";

/*
React uses JSX -> javascript xml - combination of js and html
attribute = class in html -> classname is jsx
*/

// can easily use js variables and all data structure
// to use it as a variable add var name between {}
const module_7 = "Amazing!";
const module_7_1 = ["Amazing!", "Super", "Awesome"];

const styling = { color: "red", backgroundColor: "wheat" };

function App() {
  return (
    <div
      style={
        // {color:'red', backgroundColor:'wheat'}
        /* css in jsx method 1 - inline -> style - two {} brackets - and property names in camelCase instead of kebab-case -> here created an object for css in the div */

        styling
        // second method - internal -> create a variable for css properties and put it inside style attribute
      } 
      className='App'
    >
      {/* third method - external -> 01_App.css */}

      Meet Mehta is {module_7}
      {/* Meet Mehta is Amazing! */}

      <br></br>
      {/* have to use closing tag for br */}

      Meet Mehta is {module_7_1}
      {/* Meet Mehta is Amazing!SuperAwesome */}

      <ul>
        <li>{module_7_1[0]}</li>
        <li>{module_7_1[1]}</li>
        <li>{module_7_1[2]}</li>
      </ul>
      {/* can more easily use js here */}


      {/* REACT COMPONENTS -> each website can be divided into different elements or components like an ecommerce website flipkart can be divided into navigation bar, banner (sliding pictures of products), popular recommendations, categories of products that are shown as scrollable horizontal elements showcasing different products. that each product can also be called a component. each team generally works on one component. can create different .js files for different components and at last can import them in the main js file. this makes components reusable(navigation bar which remains same for all pages) and the website manageable. change code at one place and reflects at all places where it is used. rule to identify components -> if the element is repeating then it is a component like in flipkart the products list in horizontal element is repeating. */}
      {/* bring and use that component at a specific place */}
      <MyComponent />
      <AnotherComponent />
      <AnotherComponent />
      <AnotherComponent />
      <AnotherComponent />
      <AnotherComponent />
      <AnotherComponent />

    </div>
  );
}

export default App;
