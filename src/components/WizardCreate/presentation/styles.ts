import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const grid: SxProps<Theme> = {
  display: 'grid',
  width: '100%',
  height: 'calc(100vh - 64px)',
  overflow: 'scroll',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr 80px',
  gridTemplateAreas: `"main""footer"`
};

export const main: SxProps<Theme> = {
  gridArea: 'main',
  height: '100%',
  width: '100%',
  overflow: 'scroll',
  maxWidth: (theme) => theme.breakpoints.values.lg,
  mx: 'auto'
};

export namespace content {
  export const grid: SxProps<Theme> = {
    display: 'grid',
    height: '100%',
    width: '100%',
    gridTemplateColumns: 'auto 1fr auto',
    gridTemplateRows: '1fr',
    gridTemplateAreas: `"left center right"`,
    gap: 2
  };

  export const left: SxProps<Theme> = {
    gridArea: 'left',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '12.5rem',
    gap: 4,
    mt: 4,
    ml: 2
  };

  export const main: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 4,
    mt: 4
  };

  export const right: SxProps<Theme> = {
    gridArea: 'right',
    mt: 4,
    mr: 2
  };
}

export const footer: SxProps<Theme> = {
  gridArea: 'footer',
  borderTop: 1,
  borderColor: 'grey.300',
  bgcolor: 'background.paper'
};
