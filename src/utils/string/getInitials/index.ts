export const getInitials = (firstName: string, lastName?: string) => {
  if (!firstName && !lastName) return '';
  if (firstName && !lastName) return firstName.charAt(0).toUpperCase();
  if (!firstName && lastName) return lastName.charAt(0).toUpperCase();
  return `${firstName.charAt(0).toUpperCase()}${lastName
    ?.charAt(0)
    .toUpperCase()}`;
};
