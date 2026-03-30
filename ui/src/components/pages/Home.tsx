import { Link } from 'react-router';
import CustomButton from '../ui/CustomButton';
import './Home.css';

const HomePage = () => {
  return (
    <section className="home-page">
      <div className="home-page__varsity">
        <div className="home-page__varsity-image" />
        <div className="home-page__varsity-content">
          <h1 className="home-page__title">Varsity</h1>
          <p className="home-page__description">Retro vibes with modern comfort</p>
          <div className="home-page__buttons">
            <Link to="/collections/mens-varsity">
              <CustomButton label="FOR HIM" buttonClasses={['home-page__button']} />
            </Link>
            <Link to="/collections/womens-varsity">
              <CustomButton label="FOR HER" buttonClasses={['home-page__button']} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
