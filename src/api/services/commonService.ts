import { axiosInstance } from '~api/instance';
import { ENDPOINTS } from '~api/endpoints';
import { BannerType, EventType } from '~/types';

export const fetchMainBanners = async (): Promise<BannerType[]> => {
  const response = await axiosInstance.get<BannerType[]>(
    import.meta.env.VITE_DEV_URL + ENDPOINTS.getMainBanners
  );
  return response.data;
};

export const fetchEvents = async (): Promise<EventType[]> => {
  const response = await axiosInstance.get<EventType[]>(
    import.meta.env.VITE_DEV_URL + ENDPOINTS.getEvents
  );
  return response.data;
};
