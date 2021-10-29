//material-ui
import { Typography } from '@mui/material';
import { ITip } from 'components/WizardCreate/types/tip';
//resources
import React from 'react';
import { RiLightbulbLine } from 'react-icons/ri';
import { useAppSelector } from 'hooks';

type Props = {
  tips: ITip[];
};

export function Tip({ tips }: Props) {
  const activeStep = useAppSelector(
    (s) => s.wizardCreate.jobReq.control.activeStep
  );

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
