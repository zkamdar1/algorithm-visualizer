import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { getMergeSortAnimations } from '../../algorithms/sortingAlgorithm';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;
// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;
// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';
const CONTAINER_HEIGHT = 400;

const SortingVisualizer = forwardRef((props, ref) => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  useImperativeHandle(ref, () => ({
    resetArray,
    mergeSort,
    quickSort,
    heapSort,
    bubbleSort,
    testSortingAlgorithms,
  }));

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      newArray.push(randomIntFromInterval(5, 730));
    }
    setArray(newArray);
  };

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${(newHeight / 730) * CONTAINER_HEIGHT}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const quickSort = () => {
    // Implementation of quickSort goes here
  };

  const heapSort = () => {
    // Implementation of heapSort goes here
  };

  const bubbleSort = () => {
    // Implementation of bubbleSort goes here
  };

  const testSortingAlgorithms = () => {
    for (let i = 0; i < 100; i++) {
      const newArray = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        newArray.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = newArray.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(newArray.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  };

  return (
    <div className="sorting-visualizer-container">
      <div className="array-container" style={{ height: `${CONTAINER_HEIGHT}px` }}>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${(value / 730) * CONTAINER_HEIGHT}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
});

export default SortingVisualizer;

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}