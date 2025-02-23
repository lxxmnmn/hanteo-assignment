import { useRef, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  useCarouselControl,
  getEventStatus,
  formatLocalizedDate,
  getTimeZone,
} from './Carousel.util';

import './Carousel.scss';

const data = [
  {
    id: 'slide-1',
    title: '[M COUNTDOWN] 10월 2주차 엠카 사전 투표',
    button: '투표하기',
    startDate: '2025-02-08T10:00:00',
    endDate: '2025-04-08T17:00:00',
    image: 'https://pbs.twimg.com/media/EiLB35lU0AAcIPZ.png',
    url: 'https://www.hanteochart.com',
  },
  {
    id: 'slide-2',
    title: 'Whosfan Store 소개',
    button: '바로가기',
    startDate: '2025-03-08T10:00:00',
    endDate: '2025-04-08T17:00:00',
    image: 'https://whosfanstore.com/web/upload/share-image-1-5db148be90141bbc46dcc8d5e354a90b.png',
    url: 'https://whosfanstore.com',
  },
  {
    id: 'slide-3',
    title: '2024 한터 뮤직 어워즈 투표',
    button: '투표하기',
    startDate: '2024-12-01T10:00:00',
    endDate: '2024-12-31T17:00:00',
    image: 'https://img.etnews.com/news/article/2024/11/27/cms_temp_article_27102225315309.jpg',
    url: 'https://www.hanteochart.com',
  },
  {
    id: 'slide-4',
    title: 'Whook 업데이트',
    button: '바로가기',
    startDate: '2024-02-08T10:00:00',
    endDate: '2024-04-08T17:00:00',
    image: 'https://img1.newsis.com/2022/04/14/NISI20220414_0000974729_web.jpg',
    url: 'https://www.hanteochart.com',
  },
  {
    id: 'slide-5',
    title: 'Whosfan 투표 기능 업데이트',
    button: '바로가기',
    startDate: '2020-02-08T10:00:00',
    endDate: '2020-04-08T17:00:00',
    image: 'https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2020/05/PS20051500364.jpg',
    url: 'https://whosfan.io',
  },
];

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

  const formattedData = useMemo(
    () =>
      data.map((item) => ({
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
          {formattedData.map((slide) => (
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
