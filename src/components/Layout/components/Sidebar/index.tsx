//material-ui
import { Theme } from '@mui/material';
//core-components
import { SidebarDefault, SidebarIconsOnly } from './variants';
//resources
import React from 'react';
//entities
import { menu } from './data';
import { SxProps } from '@mui/system';

type Variant = 'default' | 'iconsOnly';
type DisplayVariant = { [key in Variant]: JSX.Element };

type Props = {
  sx?: SxProps<Theme>;
  variant?: Variant;
};

export function Sidebar({ variant = 'default', ...sx }: Props) {
  const display: DisplayVariant = {
    default: <SidebarDefault menu={menu} {...sx} />,
    iconsOnly: <SidebarIconsOnly menu={menu} {...sx} />
  };

  return display[variant];
}
