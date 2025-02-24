import qs from 'qs';
import { axiosInstance } from '~api/instance';
import { ENDPOINTS } from '~api/endpoints';
import { YoutubePlaylistType } from '~/types';

const PARAM_PART: string[] = ['snippet', 'status'];
const PLAYLIST_ID = {
  STAGE_VIDEO: 'PLLu3aHnGK_WP7J3r2F2ZYvzEvfLLrxXfk',
  FOCUS_CAM: 'PLLu3aHnGK_WNnMtZ3RTlt3-eGcZn9k4g_',
} as const;
const MAX_LENGTH: number = 20;

interface YoutubePlaylistParams {
  part: string[];
  playlistId: (typeof PLAYLIST_ID)[keyof typeof PLAYLIST_ID];
  maxResults: number;
  pageToken?: string;
  key?: string;
}

const config = {
  baseURL: import.meta.env.VITE_YOUTUBE_URL,
};

export const fetchYoutubeStageVideos = async (
  pageParam: string | undefined
): Promise<YoutubePlaylistType> => {
  const params: YoutubePlaylistParams = {
    part: PARAM_PART,
    playlistId: PLAYLIST_ID.STAGE_VIDEO,
    maxResults: MAX_LENGTH,
    pageToken: pageParam || undefined,
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
  };
  const queryString = qs.stringify(params, { arrayFormat: 'comma' });

  const response = await axiosInstance.get<YoutubePlaylistType>(
    `${ENDPOINTS.getYoutubePlaylist}?${queryString}`,
    config
  );

  return response.data;
};

export const fetchYoutubeFocusCams = async (
  pageParam: string | undefined
): Promise<YoutubePlaylistType> => {
  const params: YoutubePlaylistParams = {
    part: PARAM_PART,
    playlistId: PLAYLIST_ID.FOCUS_CAM,
    maxResults: MAX_LENGTH,
    pageToken: pageParam || undefined,
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
  };
  const queryString = qs.stringify(params, { arrayFormat: 'comma' });

  const response = await axiosInstance.get<YoutubePlaylistType>(
    `${ENDPOINTS.getYoutubePlaylist}?${queryString}`,
    config
  );

  return response.data;
};
