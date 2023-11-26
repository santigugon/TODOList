import React from "react";
import {GlobalState} from "../GlobalState/GlobalState.jsx";
const useGlobalState = () => React.useContext(GlobalState);
export default function SomeComponent() {
  const { count } = useGlobalState();

  // Create a function which mutates GlobalState
  function incrementCount() {
    GlobalState.set({
      count: count + 1,
    });
  }

  return <div onClick={incrementCount}>HOLAA {count}</div>;
}