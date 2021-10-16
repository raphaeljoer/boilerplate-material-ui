import { formatDateDistance } from '..';

describe('[util] formatDateDistance', () => {
  test('Should return empty string when dates is invalid', () => {
    expect(
      formatDateDistance(new Date('2010-00-45'), new Date('2010-00-45'))
    ).toBe('');
    expect(formatDateDistance(new Date('***'), new Date('***'))).toBe('');
    expect(formatDateDistance(new Date('0-0-0'), new Date('0-0-0'))).toBe('');
    expect(
      formatDateDistance(new Date('2021-12-32'), new Date('2021-12-32'))
    ).toBe('');
  });

  test('Should return empty string when the date is Invalid Date returned from Date', () => {
    const unknownData: any = undefined;
    const date = new Date(unknownData);
    expect(formatDateDistance(date, new Date())).toBe('');
  });

  test('Should return empty string when the date is undefined', () => {
    expect(formatDateDistance(undefined, new Date())).toBe('');
    expect(formatDateDistance(new Date(), undefined)).toBe('');
    expect(formatDateDistance(undefined, undefined)).toBe('');
    expect(formatDateDistance()).toBe('');
    expect(formatDateDistance(new Date())).toBe('');
  });

  test('Should return empty string when the date is a empty string', () => {
    expect(formatDateDistance(new Date(''), new Date(''))).toBe('');
  });

  test('Should return empty string when the date is NaN', () => {
    expect(formatDateDistance(new Date(NaN), new Date(NaN))).toBe('');
  });

  test('Should return a valid distance between dates when the date is a code', () => {
    expect(formatDateDistance(new Date(1488370835081), new Date())).toBe(
      'over 4 years ago'
    );
  });

  test('Should return a valid date distance', () => {
    expect(
      formatDateDistance(new Date('2021-10-15'), new Date('2021-10-14'))
    ).toBe('in 1 day');
  });

  test('Should return the minimum distance among dates', () => {
    expect(formatDateDistance(new Date(), new Date())).toBe(
      'less than 5 seconds ago'
    );
  });
});
