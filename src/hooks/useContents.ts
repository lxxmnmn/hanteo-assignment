import { useSuspenseInfiniteQuery, InfiniteData } from '@tanstack/react-query';
import { fetchYoutubeFocusCams } from '~api/services';
import { YoutubePlaylistType } from '~/types';

const QUERY_KEY_YOUTUBE_CONTENTS: string = 'getYoutubeFocusCams';

export const useYoutubeFocusCams = () => {
  return useSuspenseInfiniteQuery<
    YoutubePlaylistType,
    Error,
    InfiniteData<YoutubePlaylistType, string | undefined>,
    string[],
    string | undefined
  >({
    queryKey: [QUERY_KEY_YOUTUBE_CONTENTS],
    queryFn: ({ pageParam = undefined }: { pageParam: string | undefined }) =>
      fetchYoutubeFocusCams(pageParam),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.nextPageToken ?? undefined,
  });
};
