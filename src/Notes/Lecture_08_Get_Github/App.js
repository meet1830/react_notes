// methods of fetching data from api
// fetch api
// xmlhttprequest
// axios
// async await

import { useState } from "react";
import './App.css'

function App() {
  const [username, setUsername] = useState("");

  // creating a state to save the data comming from backend
  const [respData, setRespData] = useState("");

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);

    // setting the data
    fetch("https://api.github.com/users/" + username)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRespData(data);
      });

    setUsername("");
  };

  return (
      <>
      <div className='container'>
        <form onSubmit={handleSubmit} className='formCard'>
          <input type="text" onChange={handleUsernameInput} value={username}/>
          <button>Submit</button>
        </form>

        {respData.message}

        {/* conditional rendering */}
        { respData && (respData.message !== 'Not Found') && (
            <div className='userDetailCard'>
              <div className='userDetailBody'>
                <p className='name'>{respData.name}</p>
                <em className='username'>{respData.login}</em>
                <div className='follow'>
                  <p>Followers : {respData.followers}</p>
                  <p>Following : {respData.following}</p>
                </div>
                <div className='profDetail'>
                  <p>🏢 {respData.company}</p>
                  <p>🗒️ {respData.bio}</p>

                </div>
              </div>
              <div className='userImage'>
                <img src={respData.avatar_url} alt="avatar" />
              </div>
            </div>
          )
        }

      </div>
    </>
  );
}

export default App;
