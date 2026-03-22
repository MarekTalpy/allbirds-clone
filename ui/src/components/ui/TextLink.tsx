import { Link } from 'react-router';

import './TextLink.css';

type TextLinkProps = {
  navigateTo: string;
  label: string;
  className?: string;
};

const TextLink = ({ navigateTo, label, className }: TextLinkProps) => {
  return (
    <Link to={navigateTo} className={`text-link ${className || ''}`}>
      {label}
    </Link>
  );
};

export default TextLink;
