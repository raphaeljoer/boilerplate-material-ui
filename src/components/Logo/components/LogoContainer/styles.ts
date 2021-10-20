import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  borderBottom: '1px solid',
  borderRight: '1px solid',
  borderColor: 'grey.300',
  pl: 2
};
