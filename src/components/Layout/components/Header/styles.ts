import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'flex',
  p: 2,
  boxShadow: (theme) => theme.shadows[4],
  zIndex: (theme) => theme.zIndex.appBar
};
