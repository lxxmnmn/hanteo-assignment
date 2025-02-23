export const CarouselSkeleton = () => {
  return (
    <section className="carousel-skeleton">
      <div className="carousel-skeleton__slide" />
      <div className="carousel-skeleton__controls" />
    </section>
  );
};

export const ListSkeleton = () => {
  return (
    <section className="list-skeleton">
      <div className="list-skeleton__title" />
      <div className="list-skeleton__list">
        <div className="list-skeleton__item" />
      </div>
    </section>
  );
};
