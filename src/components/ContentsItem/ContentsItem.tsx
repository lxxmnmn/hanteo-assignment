import { PRIVACY_STATUS } from '~/constants';
import { PlaylistItem } from '~/types';

import './ContentsItem.scss';

const ContentsItem = (content: PlaylistItem) => {
  const openYoutube = (id: string) => window.open(`https://www.youtube.com/watch?v=${id}`);

  if (content.status.privacyStatus === PRIVACY_STATUS.PRIVATE) return;

  return (
    <li
      className="contents-item"
      title={content.snippet.title}
      onClick={() => openYoutube(content.snippet.resourceId.videoId)}
    >
      <div className="contents-item__thumbnail">
        <img src={content.snippet.thumbnails.default.url} alt={content.snippet.title} />
      </div>
      <p className="contents-item__title">{content.snippet.title}</p>
    </li>
  );
};

export default ContentsItem;
