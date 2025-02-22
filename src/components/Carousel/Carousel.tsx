import { useState, useRef, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import './Carousel.scss';

const data = [
  {
    id: 'slide-1',
    title: '2024 한터 뮤직 어워즈 투표',
    button: '투표하기',
    startDate: '2024-12-01T10:00:00',
    endDate: '2024-12-31T17:00:00',
    image: 'https://img.etnews.com/news/article/2024/11/27/cms_temp_article_27102225315309.jpg',
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
    title: '[M COUNTDOWN] 10월 2주차 엠카 사전 투표',
    button: '투표하기',
    startDate: '2025-02-08T10:00:00',
    endDate: '2025-04-08T17:00:00',
    image: 'https://pbs.twimg.com/media/EiLB35lU0AAcIPZ.png',
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
  const [currentIndex, setCurrentIndex] = useState(2);
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      slidesToScroll: 'auto',
      startIndex: currentIndex,
    },
    [autoplay.current]
  );

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;

      emblaApi.scrollTo(index, false);
      setCurrentIndex(index);
      autoplay.current.reset();
      console.log(emblaApi.selectedScrollSnap());
    },
    [emblaApi]
  );

  return (
    <section className="carousel">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {data.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <img src={slide.image} alt={slide.title} />
              <div className="caption">
                <div className="caption__header">
                  <h5
                    className="caption__title"
                    title={slide.title}
                    onClick={() => window.open(`${slide.url}`)}
                  >
                    {slide.title}
                  </h5>
                  <button type="button" className="caption__button">
                    {slide.button}
                  </button>
                </div>
                <span className="caption__date">
                  {slide.startDate} ~ {slide.endDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-buttons">
        {data.map((_, index) => (
          <button
            key={index}
            className={currentIndex === index ? 'active' : ''}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
