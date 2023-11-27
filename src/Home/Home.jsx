
import SomeComponent from "../CounterTest/button.jsx";
import CounterDisplay from "../CounterTest/display.jsx";
import React, {useState} from "react";
import '../App.css';
import {GlobalState} from "../GlobalState/GlobalState.jsx";
import {Link} from "react-router-dom";
import {TaskCard} from "./Components/Task.jsx";
const useGlobalState = () => React.useContext(GlobalState);

export function  Home(){
    const {uncompletedTasks,completedTasks,filter,failedTasks}=useGlobalState();

    const setFilter = (e)=>{

    GlobalState.set({
      filter: e
    });
  }

    return (
           <>
    <div className="section-container">
        Filter:
<select
  id='select'
  onChange={(e) => setFilter(e.target.value)}
 className={"custom-dropdown"}
>
  <option value='' disabled={true}>Select Category &#x2193;</option>
  <option key={"completed"} value={"completed"}>
    Completed
  </option>

    <option key={"pending"} value={"pending"} selected={true}>
    Pending
  </option>
    <option key={"failed"} value={"failed"}>
    Failed
  </option>
</select>

{filter=="pending"?uncompletedTasks.map((act) => (
        <TaskCard  task={act}/>
        )):null}
        {
            filter=="completed"?completedTasks.map((act) => (
        <TaskCard  task={act}/>
        )):null}
         {filter=="failed"?failedTasks.map((act) => (
        <TaskCard  task={act}/>
        )):null}

</div>
    </>
       )
}
export default Home;