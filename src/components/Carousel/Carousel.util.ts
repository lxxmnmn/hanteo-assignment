import { useState, useCallback, useEffect } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import { EVENT_STATUS } from '~/constants';

interface useCarouselControlType {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
}

export const useCarouselControl = (
  emblaApi: EmblaCarouselType | undefined
): useCarouselControlType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
};

export const getEventStatus = (startDateString: string, endDateString: string): string => {
  const currentDate = new Date();
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  if (currentDate < startDate) {
    return EVENT_STATUS.UPCOMING;
  } else if (currentDate >= startDate && currentDate <= endDate) {
    return EVENT_STATUS.ONGOING;
  } else {
    return EVENT_STATUS.END;
  }
};

export const formatLocalizedDate = (dateString: string): string => {
  const date = new Date(dateString);
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const formattedDate = date.toLocaleString('ko-KR', {
    timeZone: userTimeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return formattedDate.replace(' ', '').replace(/\. /g, '.');
};

export const getTimeZone = (): string => {
  const date = new Date();
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const timeZoneName = new Intl.DateTimeFormat('en-US', {
    timeZone: userTimeZone,
    timeZoneName: 'short',
  })
    .formatToParts(date)
    .find((part) => part.type === 'timeZoneName')?.value;

  return timeZoneName || userTimeZone;
};
