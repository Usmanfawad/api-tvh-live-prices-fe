import { useState } from 'react';

const useNumericInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, '');
    setValue(numericValue);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useNumericInput;