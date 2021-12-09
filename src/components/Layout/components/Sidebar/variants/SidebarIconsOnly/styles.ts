import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  width: '5rem',
  bgcolor: 'background.paper',
  mt: 3
};

export const listItem: SxProps<Theme> = {
  height: 48
};

export const listItemIcon: SxProps<Theme> = {
  minWidth: 24,
  justifyContent: 'center'
};
