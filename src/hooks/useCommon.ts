import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchMainBanners, fetchEvents } from '~api/services';
import { BannerType, EventType } from '~/types';

const QUERY_KEY_BANNERS: string = 'getMainBanners';
const QUERY_KEY_EVENTS: string = 'getEvents';

export const useMainBanners = () => {
  return useSuspenseQuery<BannerType[], Error>({
    queryKey: [QUERY_KEY_BANNERS],
    queryFn: fetchMainBanners,
  });
};

export const useEvents = () => {
  return useSuspenseQuery<EventType[], Error>({
    queryKey: [QUERY_KEY_EVENTS],
    queryFn: fetchEvents,
  });
};
