import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'grid',
  height: '100vh',
  width: '100%',
  minWidth: (theme) => theme.breakpoints.values.md,
  bgcolor: 'background.paper',
  gridTemplateRows: '1fr',
  gridTemplateColumns: 'auto 1fr'
};
