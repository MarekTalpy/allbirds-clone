import { createPortal } from 'react-dom';

import './Overlay.css';

type OverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

const Overlay = ({ isOpen, onClose, className }: OverlayProps) => {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      aria-hidden="true"
      onClick={onClose}
      className={`overlay ${isOpen ? 'overlay--open' : 'overlay--closed'} ${className}`}
    />,
    document.body,
  );
};

export default Overlay;
