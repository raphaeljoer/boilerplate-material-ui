import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const grid: SxProps<Theme> = {
  display: 'grid',
  height: '100vh',
  overflow: 'hidden',
  bgcolor: 'background.paper',
  gridTemplateColumns: 'auto 1fr',
  gridTemplateRows: '64px 1fr',
  gridTemplateAreas: `"header header"
                      "aside main"
                      "aside main"`
};
