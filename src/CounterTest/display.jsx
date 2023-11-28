import React from "react";
import { GlobalState } from "../GlobalState/GlobalState.jsx";
const useGlobalState = () => React.useContext(GlobalState);
export function CounterDisplay() {
  return (
    <>
      <div className="section-container" style={{ backgroundColor: "none", padding: "20px" }}>
        <div>
          <h2>Lorem Ipsum Page</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          {/* Add more placeholder content as needed */}
        </div>
      </div>
    </>
  );
}

export default CounterDisplay;
