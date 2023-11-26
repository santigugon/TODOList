import React from 'react';



// Create a Context for the (global) State
export const GlobalState = React.createContext("Global");


// Create a shorthand Hook for using the GlobalState


// Create an example component which both renders and modifies the GlobalState

/*
export default function App() {
  // Note: within the Root function we can return any Component (not just SomeComponent, but also a Router for instance)
  return <Global Root={() => <SomeComponent />} />;
}

// Expose the GlobalState object to the window (allowing GlobalState.set({ count: 'new' }) from anywhere in the code (even your console))
window.GlobalState = GlobalState;*/