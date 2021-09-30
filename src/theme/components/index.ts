//material-ui
import { ThemeOptions } from '@mui/material';
//core-styles
import { MuiButton } from './MuiButton';
import { MuiButtonBase } from './MuiButtonBase';
import { MuiListItemText } from './MuiListenText';
import { MuiListItem } from './MuiListItem';
import { MuiListItemIcon } from './MuiListItemIcon';
import { MuiTooltip } from './MuiTooltip';

export const components: ThemeOptions = {
  components: {
    MuiButton,
    MuiButtonBase,
    MuiTooltip,
    MuiListItemText,
    MuiListItemIcon,
    MuiListItem
  }
};
