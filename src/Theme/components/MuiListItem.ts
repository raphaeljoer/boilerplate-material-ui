import { lighten, ListItemProps } from '@mui/material';

const defaultProps: ListItemProps = {
  dense: true,
  sx: {
    height: 40,
    color: (theme) => theme.palette.primary.main,
    borderRadius: 2,
    ':hover': {
      bgcolor: (theme) => lighten(theme.palette.primary.main, 0.92)
    }
  }
};

export const MuiListItem = {
  defaultProps
};
