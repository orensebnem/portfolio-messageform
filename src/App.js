import React from 'react';
import logo from './logo.svg';
import './App.css';
import BenimButonum from './BenimButonum'

function App() {

 const serviseIsMan = () =>{
     return true;
 }

    const dinamikDeger = "Dinamik Deger"
 

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

        <BenimButonum text="Sebnem" 
            color="mavi" 
            isMan={serviseIsMan()} 
            boraOnClick={(text) =>{alert(text + dinamikDeger)}}/>

      </header>
    </div>
  );
}

export default App;
