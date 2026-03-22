import type { HTMLInputTypeAttribute } from 'react';

import './CustomInput.css';

type CustomInputProps = {
  value: string;
  placeholder?: string;
  containerClasses?: string[];
  inputType?: HTMLInputTypeAttribute;
  onChange: (value: string) => void;
};

const CustomInput = ({ value, placeholder, containerClasses, inputType = 'text', onChange }: CustomInputProps) => {
  return (
    <div className={['custom-input', ...(containerClasses || [])].join(' ')}>
      <input value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} type={inputType} />
    </div>
  );
};

export default CustomInput;
