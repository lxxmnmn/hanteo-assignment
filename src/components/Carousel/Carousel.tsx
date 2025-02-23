import { useRef, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useMainBanners } from '~/hooks';

import {
  useCarouselControl,
  getEventStatus,
  formatLocalizedDate,
  getTimeZone,
} from './Carousel.util';
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

  const formattedData = useMemo(
    () =>
      data?.map((item) => ({
        ...item,
        status: getEventStatus(item.startDate, item.endDate),
        formattedStartDate: formatLocalizedDate(item.startDate),
        formattedEndDate: formatLocalizedDate(item.endDate),
      })),
    [data]
  );
  const timeZone = useMemo(() => getTimeZone(), []);

  const openUrl = (url: string) => window.open(url);

  return (
    <section className="carousel">
      <div className="carousel__viewport" ref={emblaRef}>
        <div className="carousel__container">
          {formattedData?.map((slide) => (
            <div className="carousel__slide" key={slide.id}>
              <div className="status">{slide.status}</div>
              <img src={slide.image} alt={slide.title} onClick={() => openUrl(slide.url)} />
              <div className="caption">
                <div className="caption__header">
                  <h5 className="caption__title" title={slide.title}>
                    {slide.title}
                  </h5>
                  <button
                    type="button"
                    className="caption__button"
                    onClick={() => openUrl(slide.url)}
                  >
                    {slide.button}
                  </button>
                </div>
                <span className="caption__date">
                  {slide.formattedStartDate} ~ {slide.formattedEndDate} ({timeZone})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel__control">
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
