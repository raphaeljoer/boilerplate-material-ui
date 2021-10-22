//material-ui
import { Typography } from '@mui/material';
//resources
import React from 'react';
import { RiLightbulbLine } from 'react-icons/ri';
import { ITip } from 'views/Wizard/types/tip';

type Props = {
  tips: ITip[];
  activeStep: number;
};

export function Tip({ tips, activeStep }: Props) {
  return (
    <div>
      <RiLightbulbLine size="24" />
      <Typography variant="h6" mb={1}>
        {tips[activeStep].title}
      </Typography>
      <Typography color="text.secondary" variant="body2">
        {tips[activeStep].description}
      </Typography>
    </div>
  );
}
