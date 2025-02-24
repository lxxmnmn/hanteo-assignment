export const isOngoing = (startDateString: string, endDateString: string): boolean => {
  const currentDate = new Date();
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  return currentDate >= startDate && currentDate <= endDate;
};
