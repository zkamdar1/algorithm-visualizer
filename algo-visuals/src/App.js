import React, { useState } from 'react';
import './App.css';
import PathfindingVisualizer from './components/PathfindingVisualizer/PathfindingVisualizer';
import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer';
import { Navbar } from './components/Navbar/Navbar';



function App() {
  const [currentView, setCurrentView] = useState('pathfinder');

  const switchView = (view) => {
    setCurrentView(view);
  }

  return (
    <div className="App">
      <Navbar switchView={switchView} currentView={currentView}/>
      {currentView === 'pathfinder' ? (
        <PathfindingVisualizer />
      ) : (
        <SortingVisualizer />
      )}
    </div>
  );
};

export default App;
