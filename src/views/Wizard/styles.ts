import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  minHeight: '100%',
  bgcolor: 'red'
};

export const content: SxProps<Theme> = {
  height: 'calc(100%,-80px)',
  overflow: 'scroll',
  maxWidth: (theme) => theme.breakpoints.values.lg,
  mx: 'auto',
  bgcolor: 'green'
};
export const box: SxProps<Theme> = {
  bgcolor: 'orange',
  height: '300px'
};

export const footer: SxProps<Theme> = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  bgcolor: 'yellow'
};
