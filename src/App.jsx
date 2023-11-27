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
  uncompletedTasks:[new Task("Tarea", "Dificil", "Urgent", "00/5048/000", "HARD")],
  failedTasks:[],
  goals:[],
  mode:"home",
  categories: [
  { name: 'work', color: '#f63b51' },
  { name: 'personal', color: '#1ba316' },
  { name: 'family', color: '#44c7ef' },
  { name: 'friends', color: '#eab308' },
  { name: 'community', color: '#78db27' },
  { name: 'health', color: '#ea8c02' },
],
  formVisibility:true
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
        <Route path="/some-component" element={<Global Root={() => <SomeComponent />} />} />
        <Route path="/counter-display" element={<Global Root={() => <CounterDisplay />} />} />
        {/* Add additional routes as needed */}
      </Routes>
        </div>
    </Router>

  );
}


window.GlobalState = GlobalState;
export default App;
