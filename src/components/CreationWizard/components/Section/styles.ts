import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  minHeight: '104px',
  border: 1,
  borderColor: 'grey.300',
  borderRadius: 3,
  bgcolor: 'background.paper'
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
  px: 3,
  py: 4
};
