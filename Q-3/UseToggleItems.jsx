import { useState } from 'react';

function UseToggleItems(initialValue, initialPosition = 0) {
  const [currentState, setCurrentState] = useState(initialValue[initialPosition]);

  const toggleState = () => {
    const currentIndex = initialValue.indexOf(currentState);
    const nextIndex = (currentIndex + 1) % initialValue.length;
    setCurrentState(initialValue[nextIndex]);
  };

  return [currentState, toggleState];
}

export default UseToggleItems;
