import forestBannerImg from '../../assets/images/home-forest.webp';

import './ImageTextBanner.css';

const ImageTextBanner = () => (
  <section className="image-text-banner">
    <picture className="image-text-banner__picture">
      <img src={forestBannerImg} alt="Green forest banner" className="image-text-banner__image" loading="eager" />
    </picture>
    <article className="image-text-banner__content">
      <h1 className="image-text-banner__title">WE WANT TO DO THINGS DIFFERENTLY, BUT BETTER</h1>
      <p className="image-text-banner__description">
        The best inventor in the world is nature. That's why we get inspiration for shoes that are incredibly
        comfortable and make you feel good all round.
      </p>
    </article>
  </section>
);
export default ImageTextBanner;
