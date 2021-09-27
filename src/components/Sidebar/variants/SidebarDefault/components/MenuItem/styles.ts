import { ButtonProps, lighten } from '@mui/material';

const opacity = 0.92;

export const button: ButtonProps = {
  variant: 'text',
  color: 'primary',
  size: 'medium',
  fullWidth: true,
  sx: {
    justifyContent: 'flex-start',
    pl: 2,
    ':hover': {
      bgcolor: (theme) => lighten(theme.palette.primary.main, opacity)
    }
  }
};
