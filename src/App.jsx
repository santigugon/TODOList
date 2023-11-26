import React from 'react';
import Home from './Home/Home.jsx';
import SomeComponent from './CounterTest/button.jsx';
import './App.css';
import { GlobalState } from './GlobalState/GlobalState.jsx';
import CounterDisplay from './CounterTest/display.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const initialGlobalState = {
  count: 0,
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

function App() {
  return (
    <Router>
      <div>
        {/* Use Link components for navigation */}
        <Link to="/home">Home</Link>
        <Link to="/some-component">Some Component</Link>
        <Link to="/counter-display">Counter Display</Link>
      </div>

      {/* Specify routes using the Routes component */}
      <Routes>
        <Route path="/home" element={<Global Root={() => <Home />} />} />
        <Route path="/some-component" element={<Global Root={() => <SomeComponent />} />} />
        <Route path="/counter-display" element={<Global Root={() => <CounterDisplay />} />} />
        {/* Add additional routes as needed */}
      </Routes>
    </Router>
  );
}


window.GlobalState = GlobalState;
export default App;
