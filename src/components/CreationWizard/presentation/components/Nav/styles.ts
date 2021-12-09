import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const content: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  px: 2,
  mx: 'auto',
  maxWidth: (theme) => theme.breakpoints.values.lg
};
