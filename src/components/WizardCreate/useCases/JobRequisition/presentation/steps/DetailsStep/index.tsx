//material-ui
import { Autocomplete, Box, TextField } from '@mui/material';
//resources
import React from 'react';
import { Section } from '../../components';
//data
import { sampleJobPositions } from '../../../data/samples/jobPositions';
//styles
// import * as styles from './styles';

export function DetailsStep() {
  return (
    <Section
      title="Position"
      description="Select the job position related to this job requisition"
    >
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Autocomplete
          disablePortal
          id="jobPosition"
          options={sampleJobPositions}
          sx={{ width: '100%' }}
          renderInput={(params) => (
            <TextField {...params} label="Job Position" />
          )}
        />
      </Box>
    </Section>
  );
}
