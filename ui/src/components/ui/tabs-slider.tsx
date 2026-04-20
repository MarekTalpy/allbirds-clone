import { Children, useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

import './tabs-slider.css';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface ToggleTab {
  id: string;
  name: string;
}

type TabsSliderProps = {
  tabs?: ToggleTab[];
  tabsClass?: string;
  activeTabId?: string;
  onTabToggle?: (tab: ToggleTab) => void;
  sliderOptions?: EmblaOptionsType;
  children: ReactNode;
};

const defaultSliderOptions: EmblaOptionsType = {
  loop: false,
  watchSlides: true,
};

const INITIAL_TAB_INDEX = 0;

const TabsSlider = ({ tabs, tabsClass, activeTabId, onTabToggle, sliderOptions, children }: TabsSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...defaultSliderOptions, ...sliderOptions });
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

  const [internalActiveTabId, setInternalTabId] = useState(tabs?.[INITIAL_TAB_INDEX]?.id);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [prevIndex, setPrevIndex] = useState(INITIAL_TAB_INDEX);

  const activeId = activeTabId !== undefined ? activeTabId : internalActiveTabId;
  const anchor = direction === 'right' ? 'left' : 'right';

  const toggleButtonsDisabled = (emblaApi: EmblaCarouselType) => {
    setPrevButtonDisabled(!emblaApi.canScrollPrev());
    setNextButtonDisabled(!emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;

    const syncButtons = () => toggleButtonsDisabled(emblaApi);
    requestAnimationFrame(syncButtons);

    emblaApi.on('reInit', syncButtons);
    emblaApi.on('select', syncButtons);

    return () => {
      emblaApi.off('reInit', syncButtons);
      emblaApi.off('select', syncButtons);
    };
  }, [emblaApi]);

  const handleTabClick = (tab: ToggleTab, index: number) => {
    if (tab.id === activeTabId) return;

    // Determine direction to correctly animate tabs
    setDirection(index > prevIndex ? 'right' : 'left');
    setPrevIndex(index);

    if (activeTabId === undefined) {
      setInternalTabId(tab.id);
    }

    onTabToggle?.(tab);
  };

  const goToPrevSlide = () => emblaApi?.scrollPrev();
  const goToNextSlide = () => emblaApi?.scrollNext();

  return (
    <div className="tabs-slider" style={{ '--tab-anchor': anchor } as CSSProperties}>
      {tabs && (
        <nav className={`tabs-slider__tabs-list ${tabsClass}`}>
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              className={`tabs-slider__tab-item ${activeId === tab.id ? 'tabs-slider__tab-item--is-active' : ''}`}
              onClick={() => handleTabClick(tab, index)}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      )}

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {Children.map(children, (child) => (
            <div className="embla__slide">{child}</div>
          ))}
        </div>
        <button
          className="embla__prev tabs-slider__btn-prev"
          onClick={goToPrevSlide}
          disabled={prevButtonDisabled}
          aria-label="Previous slide"
        >
          <HiChevronLeft size={40} />
        </button>
        <button
          className="embla__next embla__prev tabs-slider__btn-next"
          onClick={goToNextSlide}
          disabled={nextButtonDisabled}
          aria-label="Next slide"
        >
          <HiChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default TabsSlider;
