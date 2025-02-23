import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchMainBanners } from '~api/services';
import { BannerType } from '~/types';

const QUERY_KEY_BANNERS: string = 'getMainBanners';

export const useMainBanners = () => {
  return useSuspenseQuery<BannerType[], Error>({
    queryKey: [QUERY_KEY_BANNERS],
    queryFn: fetchMainBanners,
  });
};
