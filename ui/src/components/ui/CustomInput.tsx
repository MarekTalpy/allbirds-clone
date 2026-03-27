import './CustomInput.css';

type CustomInputProps = {
  value: string | number;
  placeholder?: string;
  containerClasses?: string[];
  inputType?: React.HTMLInputTypeAttribute;
  onChange: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'type'>;

const CustomInput = ({
  value,
  placeholder,
  containerClasses,
  inputType = 'text',
  onChange,
  ...rest
}: CustomInputProps) => {
  return (
    <div className={['custom-input', ...(containerClasses || [])].join(' ')}>
      <input
        {...rest}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        type={inputType}
      />
    </div>
  );
};

export default CustomInput;
