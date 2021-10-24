//material-ui
import { Typography } from '@mui/material';
//resources
import React from 'react';

export function Welcome() {
  return (
    <div>
      <Typography variant="h4" color="primary.main" mb={1}>
        Hi, John
      </Typography>
      <Typography variant="body2" color="text.secondary">
        You are creating a new job requisition.
      </Typography>
    </div>
  );
}
