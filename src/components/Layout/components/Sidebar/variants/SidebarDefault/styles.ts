import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  width: '15rem',
  bgcolor: 'background.paper',
  mt: 3
};

export const listItem: SxProps<Theme> = {
  height: 48
};

export const listItemIcon: SxProps<Theme> = {
  ml: 1,
  mr: 3,
  minWidth: 24
};

export const listItemText: SxProps<Theme> = {
  color: 'text.secondary'
};
