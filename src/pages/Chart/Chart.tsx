import { useEffect, Fragment, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { Carousel } from '~components/Carousel';
import { ContentsItem } from '~components/ContentsItem';
import { CarouselSkeleton, ListSkeleton } from '~components/ui/Skeleton';
import { useYoutubeFocusCams } from '~/hooks';

import './Chart.scss';

const Chart = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { data, fetchNextPage } = useYoutubeFocusCams();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <main className="chart">
      <Suspense fallback={<CarouselSkeleton />}>
        <Carousel />
      </Suspense>
      <Suspense fallback={<ListSkeleton />}>
        <section className="contents">
          <h3 className="contents__title">한터차트 Youtube Focus Cam 순위</h3>
          <ol className="contents__list">
            {data?.pages.flatMap((page, index) => (
              <Fragment key={index}>
                {page.items.map((content) => (
                  <ContentsItem key={content.etag} {...content} />
                ))}
              </Fragment>
            ))}
            <li ref={ref}></li>
          </ol>
        </section>
      </Suspense>
    </main>
  );
};

export default Chart;
