import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
  <div className="App"> 
  <div className="container">
  
  <Weather defaultCity="Sydney"/>
  <footer>
    This code was created by Yue Ajioka and is{" "}
    <a href="https://github.com/gocherrystar/react-weather-project" target="blank" rel="noopener noreferrer" >open-sourced on GitHub</a>
  </footer>
  </div>
  </div>
  );
}



