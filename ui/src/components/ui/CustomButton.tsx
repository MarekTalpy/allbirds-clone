import type { ReactElement } from 'react';

import './CustomButton.css';

type CustomButtonVariant = 'primary' | 'secondary';

type CustomButtonProps = {
  label: string;
  icon?: ReactElement;
  buttonClasses?: string[];
  buttonVariant?: CustomButtonVariant;
  onClick?: () => void;
};

const buttonVariantClasses = {
  primary: 'custom-button--primary',
  secondary: 'custom-button--secondary',
} satisfies Record<CustomButtonVariant, string>;

const CustomButton = ({ label, icon, buttonClasses, buttonVariant = 'primary', onClick }: CustomButtonProps) => {
  return (
    <button
      className={['custom-button', buttonVariantClasses[buttonVariant], ...(buttonClasses || [])]
        .filter(Boolean)
        .join(' ')}
      onClick={onClick}
    >
      {icon}
      {label.toUpperCase()}
    </button>
  );
};

export default CustomButton;
