import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import './InfoBar.css';

const ICON_SIZE = 20;
const ANNOUNCEMENTS = ['SHIPPING FREE FROM 50€', 'DELIVERY ON SATURDAY', 'FREE RETURN COSTS'];
const ANNOUNCEMENTS_COUNT = ANNOUNCEMENTS.length;

const InfoBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return ANNOUNCEMENTS_COUNT - 1; // wrap to last
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === ANNOUNCEMENTS_COUNT - 1) {
        return 0; // wrap to first
      }
      return prevIndex + 1;
    });
  };

  return (
    <div className="info-bar">
      <div className="info-bar__wrapper">
        <button aria-label="Previous announcement" className="info-bar__button" onClick={handlePrev}>
          <HiChevronLeft size={ICON_SIZE} />
        </button>
        <div className="info-bar__content">
          {ANNOUNCEMENTS.map((text, index) => (
            <p key={index} className={`info-bar__text ${currentIndex === index ? 'info-bar__text--active' : ''}`}>
              {text}
            </p>
          ))}
        </div>
        <button aria-label="Next announcement" className="info-bar__button" onClick={handleNext}>
          <HiChevronRight size={ICON_SIZE} />
        </button>
      </div>
    </div>
  );
};

export default InfoBar;
