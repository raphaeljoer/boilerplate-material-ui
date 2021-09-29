import { IconType } from 'react-icons';

export type MenuItem = {
  id: string;
  label: string;
  path: string;
  icon: IconType;
};

export type Menu = {
  id: string;
  label: string;
  menuItems: MenuItem[];
};
