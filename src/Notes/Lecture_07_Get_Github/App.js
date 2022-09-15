import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    
    fetch('https://api.github.com/users/' + username)
    .then(response => response.json())
    .then(data => console.table(data))

    setUsername('')
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleUsernameInput} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
