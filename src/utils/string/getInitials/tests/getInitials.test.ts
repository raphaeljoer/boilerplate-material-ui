import { getInitials } from '../index';

describe('Utils: getInitials', () => {
  test('Should return initials', () => {
    const result = getInitials('John', 'Doe');
    expect(result).toBe('JD');
  });

  test('Should accept only first name', () => {
    expect(getInitials('John')).toBe('J');
    expect(getInitials('John', '')).toBe('J');
  });

  test('Should accept only last name', () => {
    const result = getInitials('', 'Doe');
    expect(result).toBe('D');
  });

  test('Should return a empty string when input is invalid', () => {
    expect(getInitials('', '')).toBe('');
  });
});
