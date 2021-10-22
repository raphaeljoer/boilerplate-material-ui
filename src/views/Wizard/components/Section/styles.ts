import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  mb: 2,
  border: 1,
  borderColor: 'grey.300',
  borderRadius: 3,
  minHeight: '300px'
};

export const header: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  p: 3,
  borderBottom: 1,
  borderColor: 'grey.300'
};

export const body: SxProps<Theme> = {
  p: 3
};
