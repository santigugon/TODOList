import React from 'react';
import {GlobalState} from "../GlobalState/GlobalState.jsx";
const useGlobalState = () => React.useContext(GlobalState);
export function CounterDisplay() {
  const { count,uncompletedTasks } = useGlobalState();

  return (
    <div>
      <p> {uncompletedTasks.map((task, index) => (
        <li key={index}>{task.getDescription()}</li>
      ))}</p>
    </div>
  );
}

export default CounterDisplay;
