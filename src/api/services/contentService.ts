import qs from 'qs';
import { axiosInstance } from '~api/instance';
import { ENDPOINTS } from '~api/endpoints';
import { YoutubeContentsType } from '~/types';
import { YOUTUBE_ORDER, YOUTUBE_TYPE } from '~/constants';

const PARAM_PART = 'snippet';
const MAX_LENGTH = 20;
const HANTEO_CHANNEL_ID = 'UCmzvtlpNUKJTlrLCph6s3iw';

interface YoutubeContentsParams {
  part: typeof PARAM_PART;
  channelId: string;
  maxResults: number;
  pageToken?: string;
  order: (typeof YOUTUBE_ORDER)[keyof typeof YOUTUBE_ORDER];
  type: (typeof YOUTUBE_TYPE)[keyof typeof YOUTUBE_TYPE];
  key?: string;
}

export const fetchYoutubeContents = async (
  pageParam: string | undefined
): Promise<YoutubeContentsType> => {
  const params: YoutubeContentsParams = {
    part: PARAM_PART,
    channelId: HANTEO_CHANNEL_ID,
    maxResults: MAX_LENGTH,
    pageToken: pageParam || undefined,
    order: YOUTUBE_ORDER.VIEW_COUNT,
    type: YOUTUBE_TYPE.VIDEO,
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
  };
  const queryString = qs.stringify(params, { arrayFormat: 'comma' });

  const config = {
    baseURL: import.meta.env.VITE_YOUTUBE_URL,
  };

  const response = await axiosInstance.get<YoutubeContentsType>(
    `${ENDPOINTS.getYoutubeContents}?${queryString}`,
    config
  );

  return response.data;
};
