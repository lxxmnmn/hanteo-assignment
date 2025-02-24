import { useState, useMemo, useEffect, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { ListSkeleton } from '~components/ui/Skeleton';
import { useEvents } from '~/hooks';
import { isOngoing } from '~/utils';

import './Event.scss';

const EVENT_PER_PAGE: number = 10;

const Event = () => {
  const { ref, inView } = useInView({ threshold: 1 });
  const { data } = useEvents();

  const events = useMemo(() => {
    return data.filter((item) => isOngoing(item.startDate, item.endDate));
  }, [data]);
  const [page, setPage] = useState(0);
  const [visibleEvents, setVisibleEvents] = useState<typeof data>(events.slice(0, EVENT_PER_PAGE));

  const loadMore = () => {
    const nextPage = page + 1;
    const nextEvents = events.slice(0, (nextPage + 1) * EVENT_PER_PAGE);

    setPage(nextPage);
    setVisibleEvents(nextEvents);
  };

  useEffect(() => {
    if (inView) loadMore();
  }, [inView]);

  return (
    <main className="event">
      <Suspense fallback={<ListSkeleton />}>
        <section className="contents">
          <h3 className="contents__title">진행 중인 이벤트</h3>
          <ul className="contents__list">
            {visibleEvents.map((event) => (
              <li
                key={event.id}
                className="contents-item"
                title={event.title}
                onClick={() => window.open(event.url)}
              >
                <div className="contents-item__thumbnail">
                  {event.image && <img src={event.image} alt={event.title} />}
                </div>
                <p className="contents-item__title">{event.title}</p>
              </li>
            ))}
            <li ref={ref}></li>
          </ul>
        </section>
      </Suspense>
    </main>
  );
};

export default Event;
