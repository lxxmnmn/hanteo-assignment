import { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCarouselControl, useMainBanners } from '~/hooks';

import { CarouselSlide } from './CarouselSlide';
import './Carousel.scss';

const Carousel = () => {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      slidesToScroll: 'auto',
    },
    [autoplay.current]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useCarouselControl(emblaApi);
  const { data } = useMainBanners();

  return (
    <section className="carousel">
      <div className="carousel__viewport" ref={emblaRef}>
        <div className="carousel__container">
          {data.map((slide) => (
            <CarouselSlide key={slide.id} {...slide} />
          ))}
        </div>
      </div>
      <div className="carousel__controls">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={'carousel__dot'.concat(
              index === selectedIndex ? ' carousel__dot--selected' : ''
            )}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
