import React from 'react'

export const Navbar = ({
    switchView, 
    currentView,
    visualizeDijkstra,
    resetArray,
    mergeSort,
    quickSort,
    heapSort,
    bubbleSort,
    testSortingAlgorithms
}) => {
  return (
    <div className='navbar'>
        <button onClick={() => switchView('pathfinder')}>Pathfinder Visualizer</button>
        <button onClick={() => switchView('sorting')}>Sorting Visualizer</button>

        {currentView === 'pathfinder' ? (
            <>
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
  );
};
