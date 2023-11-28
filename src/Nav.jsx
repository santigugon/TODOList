import React, { useState } from "react";
import { GlobalState } from "./GlobalState/GlobalState.jsx";
import { Link } from "react-router-dom";
import { NewTask } from "./Home/Components/NewTask.jsx";
const useGlobalState = () => React.useContext(GlobalState);

const SECTIONS = [
  { name: "home", color: "#3b82f6", logo: "🏠" },
  { name: "some-component", color: "#16a34a", logo: "🎪" },
  { name: "example", color: "#ef4444", logo: "🏈" },
  { name: "society", color: "#eab308", logo: "🛒" },
  { name: "entertainment", color: "#db2777", logo: "🎭" },
  { name: "health", color: "#14b8a6", logo: "🎢" },
  { name: "history", color: "#f97316", logo: "️🎞️" },
  { name: "news", color: "#8b5cf6", logo: "🎟" },
];

export function Nav() {
  const { mode, formVisibility } = useGlobalState();
  const [showNewTask, setShowNewTask] = useState(false); // State to manage visibility of NewTask

  return (
    <>
      <header className="header">
        <div className="logo react">
          <img
            className={"logo-img"}
            src="/src/assets/checkList.svg"
            alt="checklist"
          />
          <h1>TODO APP DUODEKA!</h1>
        </div>
      </header>
      {/* Use Link components for navigation */}
    </>
  );
}

export function Aside() {
  const isLargeScreen = window.innerWidth > 768;
  return (
    <>
      {" "}
      <aside>
        <ul>
          {SECTIONS.map((section) => (
            <li key={section.name} className="category">
              <Link to={`/${section.name}`}>
                <button
                  className="btn btn-category"
                  style={{ backgroundColor: section.color }}
                  // onClick={`<Link to="/${section.name}">Home</Link>`}
                >
                  <p className={"nav-btn-name"}>{section.name}</p>
                  <p className={"nav-btn-logo"}>{section.logo}</p>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
