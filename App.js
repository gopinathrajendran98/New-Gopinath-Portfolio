
import './App.css';
import React,{useState,useEffect} from 'react';

function App() {

  const[count,setCount]=useState(10);



    

  // we can use the array are don't want it just optional

  function increase(){
    setCount(count + 1)
  }

  function decrease(){
    setCount(count-1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Use the State value {count}</h2>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
       
      
      </header>
    </div>
  );
}

export default App;
