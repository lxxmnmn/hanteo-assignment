import { axiosInstance } from '~api/instance';
import { ENDPOINTS } from '~api/endpoints';
import { BannerType } from '~/types';

export const fetchMainBanners = async (): Promise<BannerType[]> => {
  const response = await axiosInstance.get<BannerType[]>(ENDPOINTS.getMainBanners);
  return response.data;
};
