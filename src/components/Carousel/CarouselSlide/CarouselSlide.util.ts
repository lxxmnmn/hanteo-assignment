import { EVENT_STATUS } from '~/constants';

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
