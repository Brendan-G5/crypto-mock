import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';


import getData from './Services/ApiService';

function App() {

  const [data, setData] = React.useState([]);


  useEffect(() => {
    getData().then((newData) => {
      setData(newData);
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Something new
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
