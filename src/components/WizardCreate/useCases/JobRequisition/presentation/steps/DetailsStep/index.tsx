//material-ui
import { Autocomplete, Box, TextField } from '@mui/material';
//resources
import React, { useEffect } from 'react';
import { Section } from '../../components';
//data
import { sampleJobPositions } from '../../../data/samples/jobPositions';
import { useAppDispatch, useAppSelector } from 'hooks';
import { jobReqSetDetails } from 'store/slices/WizardCreate';

type JobPositionInput = {
  label: string;
  id: number;
};

type AutocompleteParams<T> = {
  e?: React.SyntheticEvent<Element, Event>;
  input: T | null;
};

type AutocompleteOnChange<T> = (params: AutocompleteParams<T>) => void;

export function DetailsStep() {
  const dispatch = useAppDispatch();

  const details = useAppSelector((s) => s.jobReqWizardCreate.details);

  const jobPosition = useAppSelector(
    (s) => s.jobReqWizardCreate.details.jobPosition
  );

  const handleSubmit = (data: unknown) => {
    console.log('data', data);
  };

  useEffect(() => {
    console.log('details', details);
  }, [details]);

  const handleChangeJobPosition: AutocompleteOnChange<JobPositionInput> = ({
    input
  }) =>
    dispatch(
      jobReqSetDetails({
        ...details,
        jobPosition: input?.id || null
      })
    );

  return (
    <form onSubmit={handleSubmit}>
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
              <TextField
                {...params}
                label="Job Position"
                defaultValue={jobPosition}
              />
            )}
            onChange={(_, input) => handleChangeJobPosition({ input })}
          />
        </Box>
      </Section>
    </form>
  );
}
