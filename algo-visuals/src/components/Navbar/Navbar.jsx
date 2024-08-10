import React from 'react';
import './Navbar.css';

export const Navbar = ({
    switchView, 
    currentView,
    visualizeDijkstra,
    resetGrid,
    resetArray,
    mergeSort,
    quickSort,
    heapSort,
    bubbleSort,
    testSortingAlgorithms
}) => {
  return (
    <div className='navbar'>
        <div className='view-buttons'>
            <button onClick={() => switchView('pathfinder')}>Pathfinder Visualizer</button>
            <button onClick={() => switchView('sorting')}>Sorting Visualizer</button>
        </div>
        <h2 className='title'>Algo Visualizer</h2>
        <div className='algo-buttons'>
            {currentView === 'pathfinder' ? (
                <>
                    <button onClick={resetGrid}>Reset Grid</button>
                    <button onClick={(visualizeDijkstra)}>
                    Visualize Dijkstra's Algorithm
                    </button>
                </>
            ) : (
                <>
                    <button onClick={(resetArray)}>Generate New Array</button>
                    <button onClick={(mergeSort)}>Merge Sort</button>
                    <button onClick={(quickSort)}>Quick Sort</button>
                    <button onClick={(heapSort)}>Heap Sort</button>
                    <button onClick={(bubbleSort)}>Bubble Sort</button>
                    <button onClick={(testSortingAlgorithms)}>Test Sorting Algorithms(BROKEN)</button>
                </>
            ) }
        </div>
    </div>
  );
};
