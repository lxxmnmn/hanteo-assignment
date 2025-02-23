import { useMemo } from 'react';
import { BannerType } from '~/types';

import { getEventStatus, formatLocalizedDate, getTimeZone } from './CarouselSlide.util';
import './CarouselSlide.scss';

interface SlideType extends BannerType {
  status: string;
  formattedStartDate: string;
  formattedEndDate: string;
  timeZone: string;
}

const CarouselSlide = (props: BannerType) => {
  const slide: SlideType = useMemo(() => {
    return {
      ...props,
      status: getEventStatus(props.startDate, props.endDate),
      formattedStartDate: formatLocalizedDate(props.startDate),
      formattedEndDate: formatLocalizedDate(props.endDate),
      timeZone: getTimeZone(),
    };
  }, [props]);

  const openUrl = (url: string) => window.open(url);

  return (
    <div className="carousel__slide">
      <div className="status">{slide.status}</div>
      <img src={slide.image} alt={slide.title} onClick={() => openUrl(slide.url)} />
      <div className="caption">
        <div className="caption__header">
          <h5 className="caption__title" title={slide.title}>
            {slide.title}
          </h5>
          <button type="button" className="caption__button" onClick={() => openUrl(slide.url)}>
            {slide.button}
          </button>
        </div>
        <span className="caption__date">
          {slide.formattedStartDate} ~ {slide.formattedEndDate} ({slide.timeZone})
        </span>
      </div>
    </div>
  );
};

export default CarouselSlide;
