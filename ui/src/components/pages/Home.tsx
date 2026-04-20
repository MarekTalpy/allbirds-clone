import './Home.css';
import CollectionCards from '../home/CollectionCards';
import CollectionWideCard from '../home/CollectionWideCard';
import ImageTextBanner from '../home/ImageTextBanner';
import TabsSlider from '../ui/tabs-slider';
import { products } from '../../mocks/products';
import ProductTile from '../ProductTile';

const TABS = [
  { id: 'men', name: 'Men' },
  { id: 'women', name: 'Women' },
];

const HomePage = () => {
  return (
    <>
      <CollectionWideCard />
      <section className="home-page__collection-cards-container home-page__content-wrapper">
        <CollectionCards />
      </section>
      <ImageTextBanner />
      <section className="home-page__content-wrapper">
        <TabsSlider tabs={TABS} tabsClass="home-page__products-slider-tabs">
          {products.map((product) => (
            <ProductTile product={product} />
          ))}
        </TabsSlider>
      </section>
    </>
  );
};

export default HomePage;
