import React from 'react';
import {GlobalState} from "../GlobalState/GlobalState.jsx";
const useGlobalState = () => React.useContext(GlobalState);
export function CounterDisplay() {
  const { count } = useGlobalState();

  return (
    <div>
      <p>Current Count: {count}</p>
    </div>
  );
}

export default CounterDisplay;
