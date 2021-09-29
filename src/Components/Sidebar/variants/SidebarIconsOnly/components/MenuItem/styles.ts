import { ButtonProps, lighten } from '@mui/material';

const opacity = 0.92;

export const iconButton: ButtonProps = {
  color: 'primary',
  size: 'medium',
  sx: {
    width: 40,
    height: 40,
    ':hover': {
      bgcolor: (theme) => lighten(theme.palette.primary.main, opacity)
    }
  }
};
