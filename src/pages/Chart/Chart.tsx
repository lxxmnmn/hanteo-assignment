import { Carousel } from '~components/Carousel';
import { ContentCuration } from '~/components/ContentCuration';

import './Chart.scss';

const Chart = () => {
  return (
    <main className="chart">
      <Carousel />
      <ContentCuration />
    </main>
  );
};

export default Chart;
