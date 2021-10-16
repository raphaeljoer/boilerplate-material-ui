import { formatDistance, isValid } from 'date-fns';

export const formatDateDistance = (date01?: Date, date02?: Date) => {
  if (!date01 || !date02) return '';
  if (!isValid(date01) || !isValid(date02)) return '';
  return formatDistance(date01, date02, {
    addSuffix: true,
    includeSeconds: true
  });
};
