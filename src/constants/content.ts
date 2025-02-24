export const YOUTUBE_TYPE = {
  CHANNEL: 'channel',
  PLAYLIST: 'playlist',
  VIDEO: 'video',
} as const;

export const YOUTUBE_ORDER = {
  DATE: 'date',
  RATING: 'rating',
  RELEVANCE: 'relevance',
  TITLE: 'title',
  VIDEO_COUNT: 'videoCount',
  VIEW_COUNT: 'viewCount',
} as const;

export const PRIVACY_STATUS = {
  PUBLIC: 'public',
  PRIVATE: 'private',
} as const;
