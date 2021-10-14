import { SxProps, Theme } from '@mui/system';

export const container: SxProps<Theme> = {
  width: 304,
  height: '100%'
};

export const items: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: 1,
  mt: 1,
  p: 1,
  bgcolor: 'grey.100',
  borderRadius: 1.5
};
