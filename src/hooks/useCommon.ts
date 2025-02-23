import { useQuery } from '@tanstack/react-query';
import { fetchMainBanners } from '~api/services/commonService';
import { BannerType } from '~/types';

const QUERY_KEY_BANNERS = 'getProducts';

export const useMainBanners = () => {
  return useQuery<BannerType[]>({
    queryKey: [QUERY_KEY_BANNERS],
    queryFn: fetchMainBanners,
  });
};
