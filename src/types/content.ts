interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface ContentSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: { default: Thumbnail; medium: Thumbnail; high: Thumbnail };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface Content {
  kind: string;
  etag: string;
  id: { kind: string; videoId: string };
  snippet: ContentSnippet;
}

export interface YoutubeContentsType {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken?: string;
  regionCode: string;
  pageInfo: { totalResults: number; resultsPerPage: number };
  items: Content[];
}
