import type { CSSProperties } from 'react';
import { Link } from 'react-router';

import type { ICollectionCard } from './CollectionCards';
import CustomButton from '../ui/CustomButton';
import './CollectionCard.css';

type CollectionCardProps = {
  card: ICollectionCard;
};

const CollectionCard = ({ card }: CollectionCardProps) => {
  const { title, description, link, imgMobile, imgDesktop, actions } = card;

  const backgroundStyle = {
    '--mobile-bg': `url(${imgMobile.src})`,
    '--desktop-bg': `url(${imgDesktop.src})`,
  } as CSSProperties;

  return (
    <section className="collection-card">
      <Link to={link} className="collection-card__image-wrapper">
        <div className="collection-card__image" style={backgroundStyle} />
      </Link>
      <div className="collection-card__content">
        <h1 className="collection-card__title">{title}</h1>
        <p className="collection-card__description">{description}</p>
        <div className="collection-card__buttons">
          {actions.map((action) => (
            <Link to={action.link}>
              <CustomButton label={action.title} buttonClasses={['collection-card__button']} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionCard;
