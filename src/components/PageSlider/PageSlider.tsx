import { JSX, useState, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { CATEGORY } from '~/constants';

import { Chart } from '~pages/Chart';
import { Event } from '~pages/Event';

import './PageSlider.scss';

interface PageType {
  name: string;
  path: string;
  component: JSX.Element;
}

const components: JSX.Element[] = [<Chart />, <div>whook</div>, <Event />];
const pages: PageType[] = CATEGORY.map((item, index) => ({
  ...item,
  component: components[index],
}));

const PageSlider = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [activeIndex, setActiveIndex] = useState(
    pages.findIndex((item) => item.path === location.pathname)
  );

  const selectCategory = useCallback(() => {
    if (!emblaApi) return;
    const newIndex = emblaApi.selectedScrollSnap();
    navigate(pages[newIndex].path);
  }, [emblaApi, navigate]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', selectCategory);
      emblaApi.scrollTo(activeIndex);
    }
  }, [emblaApi, activeIndex, selectCategory]);

  useEffect(() => {
    setActiveIndex(pages.findIndex((item) => item.path === location.pathname));
  }, [location.pathname]);

  return (
    <div className="page" ref={emblaRef}>
      <div className="page__container">
        {pages.map((page) => (
          <div className="page__slide">{page.component}</div>
        ))}
      </div>
    </div>
  );
};

export default PageSlider;
