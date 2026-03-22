import { Link } from 'react-router';

import './CustomLink.css';

type CustomLinkProps = {
  navigateTo: string;
  label: string;
  className?: string;
};

const CustomLink = ({ navigateTo, label, className }: CustomLinkProps) => {
  return (
    <Link to={navigateTo} className={`custom-link ${className || ''}`}>
      {label}
    </Link>
  );
};

export default CustomLink;
