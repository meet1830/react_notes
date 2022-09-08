// onChange event listener using useState

import { useState } from "react";

function App() {
  const [myName, setMyName] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [myContact, setMyContact] = useState("");

  const handleName = (e) => {
    console.log(e.target.value);
    setMyName(e.target.value);
  };

  const handleEmail = (e) => {
    setMyEmail(e.target.value);
  };

  const handleContact = (e) => {
    setMyContact(e.target.value);
  };

  return (
    <>
      {/* as we type the details in input, it is shown above the input attributes on the webpage */}
      <h2>
        {myName} {myEmail} {myContact}
      </h2>

      <form>
        <label>Name: </label>
        <input type="text" onChange={handleName} />

        <br />

        <label>Email:</label>
        <input type="email" onChange={handleEmail} />

        <br />

        <label>Contact:</label>
        <input type="text" onChange={handleContact} />

        <br />
      </form>

      <button type='button' onClick={() => {alert(`Name: ${myName} Email: ${myEmail} Contact: ${myContact}`)}}>Submit</button>
    </>

    // to conclude usestate and onchange are very useful for backend to save the data the user has entered
  );
}

export default App;

