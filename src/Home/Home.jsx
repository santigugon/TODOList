
import SomeComponent from "../CounterTest/button.jsx";
import CounterDisplay from "../CounterTest/display.jsx";
import React, {useState} from "react";
import '../App.css';
import {GlobalState} from "../GlobalState/GlobalState.jsx";
import {Link} from "react-router-dom";
import {TaskCard} from "./Components/Task.jsx";
const useGlobalState = () => React.useContext(GlobalState);

export function  Home(){
    const {uncompletedTasks,completedTasks}=useGlobalState();
/*
    GlobalState.set({
      mode: "home"
    });
    */

    return (
           <>
    <div className="section-container">


{uncompletedTasks.map((act) => (
        <TaskCard  task={act}/>
        ))}

    <CounterDisplay/>
</div>
    </>
       )
}
export default Home;