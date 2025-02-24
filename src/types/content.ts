import { PRIVACY_STATUS } from '~/constants';

interface YoutubeContentId {
  kind: string;
  videoId: string;
}

interface YoutubeThumbnail {
  url: string;
  width: number;
  height: number;
}

interface PlaylistSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: YoutubeThumbnail;
    medium: YoutubeThumbnail;
    high: YoutubeThumbnail;
    standard: YoutubeThumbnail;
    maxres: YoutubeThumbnail;
  };
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: YoutubeContentId;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
}

export interface PlaylistItem {
  kind: string;
  etag: string;
  id: YoutubeContentId;
  snippet: PlaylistSnippet;
  status: { privacyStatus: (typeof PRIVACY_STATUS)[keyof typeof PRIVACY_STATUS] };
}

export interface YoutubePlaylistType {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken?: string;
  pageInfo: { totalResults: number; resultsPerPage: number };
  items: PlaylistItem[];
}
