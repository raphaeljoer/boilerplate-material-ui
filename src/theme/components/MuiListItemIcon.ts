import { ListItemIconProps } from '@mui/material';

const defaultProps: ListItemIconProps = {
  sx: {
    minWidth: 24,
    color: (theme) => theme.palette.primary.main
  }
};

export const MuiListItemIcon = {
  defaultProps
};
