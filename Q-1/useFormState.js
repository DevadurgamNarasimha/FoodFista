import { useState } from 'react';

function UseFormState(initialState) {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return [formState, handleChange];
}

export default UseFormState;
