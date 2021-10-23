import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  gridArea: 'footer',
  borderTop: 1,
  borderColor: 'grey.300',
  bgcolor: 'background.paper'
};

export const content: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  mx: 'auto',
  maxWidth: (theme) => theme.breakpoints.values.lg
};
