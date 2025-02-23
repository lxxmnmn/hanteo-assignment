import { Suspense } from 'react';
import { Carousel } from '~components/Carousel';
import { ContentCuration } from '~components/ContentCuration';
import { CarouselSkeleton, ListSkeleton } from '~components/ui/Skeleton';

import './Chart.scss';

const Chart = () => {
  return (
    <main className="chart">
      <Suspense fallback={<CarouselSkeleton />}>
        <Carousel />
      </Suspense>
      <Suspense fallback={<ListSkeleton />}>
        <ContentCuration />
      </Suspense>
    </main>
  );
};

export default Chart;
