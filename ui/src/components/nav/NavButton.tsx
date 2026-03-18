import { Link } from 'react-router';

import './NavButton.css';

type NavButtonProps = {
  title: string;
  linkStyle?: React.CSSProperties;
  children?: React.ReactNode;
};

const NavButton = ({ title, linkStyle, children }: NavButtonProps) => {
  return (
    <div className="nav-button__container">
      <Link className="nav-button__link" style={{ ...linkStyle }} to={`/collections/${title}`}>
        {title.toUpperCase()}
      </Link>

      <div className="nav-button__children">{children}</div>
    </div>
  );
};
export default NavButton;
