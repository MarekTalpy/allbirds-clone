import './Home.css';
import CollectionCards from '../home/CollectionCards';
import CollectionWideCard from '../home/CollectionWideCard';
import ImageTextBanner from '../home/ImageTextBanner';

const HomePage = () => {
  return (
    <>
      <CollectionWideCard />
      <section className="home-page__collection-cards-container">
        <CollectionCards />
      </section>
      <ImageTextBanner />
    </>
  );
};

export default HomePage;
