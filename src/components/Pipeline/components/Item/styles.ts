import { SxProps, Theme } from '@mui/system';

export const container: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  p: 2,
  bgcolor: 'background.paper',
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'grey.300'
};

export const avatar: SxProps<Theme> = {
  fontFamily: 'ubuntu',
  fontSize: '1rem',
  bgcolor: 'primary.main',
  color: 'primary.contrastText'
};

export const content: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  ml: 2
};

export const shadow = (isDragging: boolean): SxProps<Theme> => ({
  boxShadow: isDragging ? '0px 0px 8px rgba(0, 0, 0, 0.2)' : 'none'
});
