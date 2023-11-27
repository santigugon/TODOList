import React from 'react';
import Home from './Home/Home.jsx';
import SomeComponent from './CounterTest/button.jsx';
import './App.css';
import { GlobalState } from './GlobalState/GlobalState.jsx';
import CounterDisplay from './CounterTest/display.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {Nav,Aside} from "./Nav.jsx";
import {Task} from "./Classes/Goal.js";

const initialGlobalState = {
  count: 0,
  completedTasks:[],
  uncompletedTasks:[new Task("Tarea", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa", "Urgent", "15/08/2023", "Hard", "Family")],
  failedTasks:[],
  goals:[],
  mode:"home",
  categories: [
  { name: 'Work', color: '#f63b51' },
  { name: 'Personal', color: '#1ba316' },
  { name: 'Family', color: '#44c7ef' },
  { name: 'Friends', color: '#eab308' },
  { name: 'Community', color: '#78db27' },
  { name: 'Health', color: '#ea8c02' },
],
  priorityOptions : ['Urgent', 'Important', 'Low'], // Add your priority options
  difficultyOptions : ['Hard', 'Medium', 'Easy'], // Add your difficulty options
  formVisibility:true,
  filter: "pending"
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
       <div className={"main-structure"}>
      <Global Root={() => <Aside />} />

        {/* Use Link components for navigation */}



      {/* Specify routes using the Routes component */}
      <Routes>
        <Route path="/home" element={<Global Root={() => <Home />} />} />
        <Route path="/some-component" element={<Global Root={() => <CounterDisplay />} />} />
        <Route path="/example" element={<Global Root={() => <CounterDisplay />} />} />
        <Route path="/society" element={<Global Root={() => <CounterDisplay />} />} />
        <Route path="/entertainment" element={<Global Root={() => <CounterDisplay />} />} />
        <Route path="/health" element={<Global Root={() => <CounterDisplay />} />} />
         <Route path="/news" element={<Global Root={() => <CounterDisplay />} />} />

      </Routes>
        </div>
    </Router>

  );
}


window.GlobalState = GlobalState;
export default App;
