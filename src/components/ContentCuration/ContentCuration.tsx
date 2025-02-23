import { useEffect, Fragment } from 'react';
import { useInView } from 'react-intersection-observer';
import { useYoutubeContents } from '~/hooks';

import './ContentCuration.scss';

const ContentCuration = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { data, fetchNextPage } = useYoutubeContents();

  const openYoutube = (id: string) => window.open(`https://www.youtube.com/watch?v=${id}`);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <section className="curation">
      <h3 className="curation__title">한터차트 유튜브 랭킹</h3>
      <ol className="curation__list">
        {data?.pages.flat().map((page, index) => (
          <Fragment key={index}>
            {page.items.map((content) => (
              <li
                key={content.etag}
                className="curation__item"
                title={content.snippet.title}
                onClick={() => openYoutube(content.id.videoId)}
              >
                <div className="content-thumbnail">
                  <img src={content.snippet.thumbnails.default.url} alt={content.snippet.title} />
                </div>
                <p className="content-title">{content.snippet.title}</p>
              </li>
            ))}
          </Fragment>
        ))}
        <li ref={ref}></li>
      </ol>
    </section>
  );
};

export default ContentCuration;
