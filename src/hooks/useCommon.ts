import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchMainBanners } from '~api/services/commonService';
import { BannerType } from '~/types';

const QUERY_KEY_BANNERS = 'getMainBanners';

export const useMainBanners = () => {
  return useSuspenseQuery<BannerType[]>({
    queryKey: [QUERY_KEY_BANNERS],
    queryFn: fetchMainBanners,
  });
};
