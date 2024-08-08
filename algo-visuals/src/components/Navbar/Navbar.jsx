import React from 'react'
import PathfindingVisualizer from '../PathfindingVisualizer/PathfindingVisualizer';
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer';


export const Navbar = ({switchView, currentView}) => {
  return (
    <div className='navbar'>
        <button onClick={() => switchView('pathfinder')}>Pathfinder Visualizer</button>
        <button onClick={() => switchView('sorting')}>Sorting Visualizer</button>

        {currentView === 'pathfinder' ? (
            <>
                <button onClick={() => this.visualizeDijkstra()}>
                Visualize Dijkstra's Algorithm
                </button>
            </>
        ) : (
            <>
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.testSortingAlgorithms()}>
                    Test Sorting Algorithms (BROKEN)
                </button>
            </>
        ) }
    </div>
  );
};
