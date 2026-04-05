import './Home.css';
import CollectionCards from '../home/CollectionCards';
import CollectionWideCard from '../home/CollectionWideCard';

const HomePage = () => {
  return (
    <>
      <CollectionWideCard />
      <section className="home-page__collection-cards-container">
        <CollectionCards />
      </section>
    </>
  );
};

export default HomePage;
