import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  boxShadow: (theme) => theme.shadows[10],
  pl: 2
};
