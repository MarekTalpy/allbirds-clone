import { useState, useEffect, type ChangeEvent } from 'react';

import './QuantityInput.css';

type QuantityInputProps = {
  initialValue: number;
  max?: number;
  onChange: (value: number) => void;
  className?: string;
};

const MIN_NUMBER = 1;
const MAX_NUMBER = 99;

export const QuantityInput = ({ initialValue, max = MAX_NUMBER, onChange, className }: QuantityInputProps) => {
  // Internal state as string to allow typing/backspace
  const [inputValue, setInputValue] = useState(String(initialValue));

  // Sync with external initial value
  useEffect(() => {
    setInputValue(String(initialValue));
  }, [initialValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    // Only digits or empty
    if (val !== '' && !/^\d+$/.test(val)) return;

    // If user types 0 → change to 1 immediately
    if (val === '0') {
      val = String(MIN_NUMBER);
      setInputValue(val);
      onChange(MIN_NUMBER);
      return;
    }

    // Limit to max 2 digits
    if (val.length > 2) return;

    const num = val === '' ? MIN_NUMBER : Number(val);

    // Enforce max
    if (num > max) return;

    setInputValue(val);
    if (val !== '') onChange(num);
  };

  const handleBlur = () => {
    // If empty, reset to 1
    if (inputValue === '' || Number(inputValue) < MIN_NUMBER) {
      setInputValue(String(MIN_NUMBER));
      onChange(MIN_NUMBER);
    }
  };

  return (
    <input
      type="text" // full control
      inputMode="numeric"
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
      className={`quantity-input ${className}`}
    />
  );
};
