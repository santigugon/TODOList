import React from "react";
import Home from "./Home/Home.jsx";
import SomeComponent from "./CounterTest/button.jsx";
import "./App.css";
import { GlobalState } from "./GlobalState/GlobalState.jsx";
import CounterDisplay from "./CounterTest/display.jsx";
import { BrowserRouter as Router, Route, Routes, Link, Navigate  } from "react-router-dom";
import { Nav, Aside } from "./Nav.jsx";
import { Task } from "./Classes/Goal.js";
import { NewTask } from "./Home/Components/NewTask.jsx";
import ExtraPage from "./CounterTest/extraPage.jsx";
import ExtraPage2 from "./CounterTest/ExtraPage2.jsx";
import ExtraPage3 from "./CounterTest/ExtraPage3.jsx";

const initialGlobalState = {
  count: 0,
  completedTasks: [],
  uncompletedTasks: [
    new Task(
      " Complete Monthly Report",
      "Prepare and submit the monthly report for the marketing department. Include key performance metrics, upcoming initiatives, and any challenges faced during the month. Collaborate with team members to gather relevant data and insights. Ensure the report is comprehensive and presented in a clear and concise manner.",
      "Urgent",
      "15/08/2023",
      "Hard",
      "Family"
    ),new Task(
      " Finish Exams ",
      "Read all about Data Structures and algorithms in order to be able to create a pseudocode out of my knowledge. Prepare a presentation for Friday and practice some integrals",
      "Urgent",
      "27/08/2023",
      "Hard",
      "Work"
    )
  ],
  failedTasks: [],
  goals: [],
  mode: "home",
  categories: [
    { name: "Work", color: "#f63b51" },
    { name: "Personal", color: "#1ba316" },
    { name: "Family", color: "#44c7ef" },
    { name: "Friends", color: "#eab308" },
    { name: "Community", color: "#78db27" },
    { name: "Health", color: "#ea8c02" },
  ],
  priorityOptions: ["Urgent", "Important", "Low"], // Add your priority options
  difficultyOptions: ["Hard", "Medium", "Easy"], // Add your difficulty options
  formVisibility: false,
  filter: "pending",
};

class Global extends React.Component {
  constructor(props) {
    super(props);

    // Set the initial (global) State
    this.state = {
      globals: initialGlobalState || {},
    };
  }

  // Expose the setGlobals function to the Globals object
  componentDidMount() {
    GlobalState.set = this.setGlobalState;
  }

  setGlobalState = (data = {}) => {
    const { globals } = this.state;

    // Loop over the data items by key, only updating those which have changed
    Object.keys(data).forEach((key) => {
      globals[key] = data[key];
    });

    // Update the state with the new State
    this.setState(globals);
  };

  render() {
    const { globals } = this.state;
    const { Root } = this.props;

    return (
      // Pass the current value of GlobalState, based on this components' State, down
      <GlobalState.Provider value={globals}>
        {/* Check if Root is an array */}
        {Array.isArray(Root) ? (
          // If it's an array, render each component
          <>
            {Root.map((Component, index) => (
              <Component key={index} />
            ))}
          </>
        ) : (
          // If it's not an array, render the single component
          <Root />
        )}
      </GlobalState.Provider>
    );
  }
}

const useGlobalState = () => React.useContext(GlobalState);

function App() {
  const { mode } = useGlobalState();
  return (
    <Router>
      <Global Root={() => <Nav />} />
      <Global Root={() => <NewTask />} />

      <div className={"main-structure"}>
        <Global Root={() => <Aside />} />

        {/* Use Link components for navigation */}

        {/* Specify routes using the Routes component */}
        <Routes>
           <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Global Root={() => <Home />} />} />
          <Route
            path="/some-component"
            element={<Global Root={() => <CounterDisplay />} />}
          />
          <Route
            path="/example"
            element={<Global Root={() => <ExtraPage />} />}
          />
          <Route
            path="/society"
            element={<Global Root={() => <ExtraPage2 />} />}
          />
          <Route
            path="/entertainment"
            element={<Global Root={() => <ExtraPage3 />} />}
          />
          <Route
            path="/health"
            element={<Global Root={() => <ExtraPage />} />}
          />
           <Route
            path="/history"
            element={<Global Root={() => <ExtraPage />} />}
          />
          <Route
            path="/news"
            element={<Global Root={() => <ExtraPage2 />} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

window.GlobalState = GlobalState;
export default App;
