import { AvatarProps } from '@mui/material';

export type ItemProps = {
  id: string;
  title: string;
  description?: string;
  avatarProps?: AvatarProps;
  created_at: string;
};

export type ItemsProps = {
  [key: string]: ItemProps;
};
