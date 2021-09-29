//material-ui
import { BoxProps } from '@mui/material';
//core-components
import { SidebarDefault, SidebarIconsOnly } from './variants';
//resources
import React from 'react';
//entities
import { Menu } from './entities/menu';

type Variant = 'default' | 'iconsOnly';
type DisplayVariant = { [key in Variant]: JSX.Element };

type Props = BoxProps & {
  menu: Menu[];
  variant: Variant;
};

export function Sidebar({ menu, variant = 'default', ...props }: Props) {
  const display: DisplayVariant = {
    default: <SidebarDefault menu={menu} {...props} />,
    iconsOnly: <SidebarIconsOnly menu={menu} {...props} />
  };

  return display[variant];
}
