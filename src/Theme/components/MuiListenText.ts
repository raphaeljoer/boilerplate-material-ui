import { ListItemTextClasses, ListItemTextProps } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';
import { ubuntu } from '../typography';

const defaultProps: ListItemTextProps = {
  disableTypography: true
};

const styleOverrides: Partial<OverridesStyleRules<keyof ListItemTextClasses>> =
  {
    root: {
      fontFamily: ubuntu,
      fontWeight: 500,
      fontSize: 14
    }
  };

export const MuiListItemText = {
  defaultProps,
  styleOverrides
};
