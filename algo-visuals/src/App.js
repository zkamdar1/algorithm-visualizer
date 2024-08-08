import React, { useState, useRef } from 'react';
import './App.css';
import PathfindingVisualizer from './components/PathfindingVisualizer/PathfindingVisualizer';
import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer';
import { Navbar } from './components/Navbar/Navbar';



function App() {
  const [currentView, setCurrentView] = useState('pathfinder');
  const pathfindingRef = useRef();
  const sortingRef = useRef();

  const switchView = (view) => {
    setCurrentView(view);
  }

  return (
    <div className="App">
      <Navbar 
        switchView={switchView} 
        currentView={currentView}
        visualizeDijkstra={() => pathfindingRef.current.visualizeDijkstra()}
        resetArray={() => sortingRef.current.resetArray()}
        mergeSort={() => sortingRef.current.mergeSort()}
        quickSort={() => sortingRef.current.quickSort()}
        heapSort={() => sortingRef.current.heapSort()}
        bubbleSort={() => sortingRef.current.bubbleSort()}
        testSortingAlgorithms={() => sortingRef.current.testSortingAlgorithms()}
      />
      {currentView === 'pathfinder' ? (
        <PathfindingVisualizer ref={pathfindingRef} />
      ) : (
        <SortingVisualizer ref={sortingRef}/>
      )}
    </div>
  );
};

export default App;
