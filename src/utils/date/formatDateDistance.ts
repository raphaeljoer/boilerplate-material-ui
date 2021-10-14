import { formatDistance } from 'date-fns';

export const formatDateDistance = (date: string) => {
  return formatDistance(new Date(date), new Date(), {
    addSuffix: true,
    includeSeconds: true
  });
};

//TODO:  Create a test for this function
