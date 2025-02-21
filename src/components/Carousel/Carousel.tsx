import { useState } from 'react';

import './Carousel.scss';

const data = [
  { id: 1, name: '배너 1', image: '/mnt/data/sample.png', url: '' },
  { id: 2, name: '배너 2', image: '/mnt/data/sample.png', url: '' },
  { id: 3, name: '배너 3', image: '/mnt/data/sample.png', url: '' },
  { id: 4, name: '배너 4', image: '/mnt/data/sample.png', url: '' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="carousel">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((slide) => (
          <article>
            <a key={slide.id} href={slide.url} className="slide">
              <img src={slide.image} alt={slide.name} />
            </a>
          </article>
        ))}
      </div>
      <div className="carousel-buttons">
        {data.map((_, index) => (
          <button
            key={index}
            className={currentIndex === index ? 'active' : ''}
            onClick={() => moveToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
