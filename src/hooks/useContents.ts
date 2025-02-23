import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { fetchYoutubeContents } from '~api/services';

const QUERY_KEY_YOUTUBE_CONTENTS: string = 'getYoutubeContents';

export const useYoutubeContents = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [QUERY_KEY_YOUTUBE_CONTENTS],
    queryFn: ({ pageParam = undefined }: { pageParam: string | undefined }) =>
      fetchYoutubeContents(pageParam),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.nextPageToken ?? undefined,
  });
};
