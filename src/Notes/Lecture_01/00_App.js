// Default react code when creating a new app

// import logo from './logo.svg'; -> default code

import logo from '../../logo.svg';
// ./ means look in the same directory
// ../ goes to parent dir
// ../../ goes back two times
// just / goes to the beginning of the dir that is the root folder -> meet -> downloads...

import './00_App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
