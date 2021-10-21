import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'grid',
  height: '100vh',
  overflow: 'hidden',
  minWidth: (theme) => theme.breakpoints.values.md,
  bgcolor: 'background.paper',
  gridTemplateColumns: 'auto 1fr',
  gridTemplateRows: '4.5rem 1fr',
  gridTemplateAreas: `"logo header"
                      "aside main"
                      "aside footer"`
};
