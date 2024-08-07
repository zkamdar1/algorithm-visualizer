import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';



function App() {
  return (
    <div className="App">
      <PathfindingVisualizer></PathfindingVisualizer>
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
