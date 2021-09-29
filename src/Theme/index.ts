//material-ui
import { ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material/styles';
//theme
import { palette } from './palette';
import { typography } from './typography';
import { components } from './components';

export const lightTheme: ThemeOptions = {
  ...palette,
  ...typography,
  ...components
};

export const theme = createTheme(lightTheme);

/*
 * Documentation:
 * https://material-ui.com/customization/themes/
 *
 * Default Theme:
 * https://next--material-ui.netlify.app/customization/default-theme/
 *
 */
