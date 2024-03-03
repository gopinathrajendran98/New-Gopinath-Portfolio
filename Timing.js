import React,{useState} from "react";
import './App.css'


function Timing(){

    const[time,setTime]=useState(start());

    function start(){
        return new Date().toLocaleTimeString()
    }

    function end(){
        return (
            setTime(start())
        )
    }

    setInterval(end,1000)

    return(
        <div className="App">
              <header className="App-header">
            <h1>{time}</h1>
            </header>
        </div>
    )
}

export default Timing