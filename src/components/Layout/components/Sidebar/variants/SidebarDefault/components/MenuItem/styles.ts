import { lighten } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

const opacity = 0.92;

export const button: SxProps<Theme> = {
  justifyContent: 'flex-start',
  pl: 2,
  ':hover': {
    bgcolor: (theme) => lighten(theme.palette.primary.main, opacity)
  }
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
