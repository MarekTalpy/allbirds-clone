import { HiX } from 'react-icons/hi';

import appLogo from '@/assets/images/logo-title.png';
import './MenuSideMenuContent.css';
import { menuItems } from '@/lib/constants';
import { Link } from 'react-router';
import Separator from '../ui/Separator';
import Accordion from '../ui/Accordion';

type MenuSideMenuContentProps = {
  onClose: () => void;
};

const MenuSideMenuContent = ({ onClose }: MenuSideMenuContentProps) => {
  const renderMenuAccordions = () => {
    return menuItems.map((firstLevelItem) => {
      return firstLevelItem?.menuItems ? (
        <li key={firstLevelItem.titleLink}>
          <Accordion title={<Link to={`/collections/${firstLevelItem.titleLink}`}>{firstLevelItem.title}</Link>}>
            <ul className="menu-side-menu-content__accordion-content">
              {firstLevelItem.menuItems.map((secondLevelItem) => {
                return (
                  <li key={secondLevelItem.titleLink}>
                    <Accordion
                      title={<Link to={`/collections/${secondLevelItem.titleLink}`}>{secondLevelItem.title}</Link>}
                    >
                      <ul className="menu-side-menu-content__accordion-content menu-side-menu-content__accordion-content--deepest">
                        {secondLevelItem.endItems.map((endItem) => {
                          return (
                            <li key={endItem.link}>
                              <Link to={`/collections/${endItem.link}`}>{endItem.text}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </Accordion>
                  </li>
                );
              })}
            </ul>
          </Accordion>
        </li>
      ) : (
        <>
          <li className="menu-side-menu-content__menu-item" key={firstLevelItem.titleLink}>
            <Link
              to={`/collections/${firstLevelItem.titleLink}`}
              style={firstLevelItem.isHighlighted ? { color: 'var(--color-danger)' } : {}}
            >
              {firstLevelItem.title.toUpperCase()}
            </Link>
          </li>
          <Separator />
        </>
      );
    });
  };

  return (
    <div className="menu-side-menu-content">
      <header className="menu-side-menu-content__header">
        <img src={appLogo} alt="App logo" height={40} />
        <button className="menu-side-menu-content__close" onClick={onClose}>
          <HiX size={18}></HiX>
        </button>
      </header>
      <ul className="menu-side-menu-content__main">{renderMenuAccordions()}</ul>
    </div>
  );
};

export default MenuSideMenuContent;
