//material-ui
import { Autocomplete, Box, TextField } from '@mui/material';
//resources
import React, { useCallback, useEffect, useRef } from 'react';
import { Section } from '../../components';
//data
import { sampleJobPositions } from '../../../data/samples/jobPositions';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  jobReqSetDetails,
  jobReqToggleNextStepAvailable
} from 'store/slices/WizardCreate';
import { useForm } from 'react-hook-form';
import { JobPositionInputType } from '../../../types/Details/JobPositionInputType';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { sampleTeams } from '../../../data/samples/teams';
import { TeamInputType } from '../../../types/Details/TeamInputType';

type AutocompleteParams<T> = {
  e?: React.SyntheticEvent<Element, Event>;
  input: T | null;
};

type AutocompleteOnChange<T> = (params: AutocompleteParams<T>) => void;

const schema = yup
  .object({
    jobPosition: yup
      .object()
      .typeError('Select a job position')
      .required('Select a job position'),
    team: yup
      .object()
      .typeError('Select a team')
      .required('Please choose a team')
    // currency: yup.number().positive(positiveError).integer(integerError).required('is required'),
    // minSalary: yup.number().positive(positiveError).integer(integerError).required('Please inform the minimum salary'),
    // maxSalary: yup.number().positive(positiveError).integer(integerError).required('Please inform the maximum salary'),
    // minExperience: yup.number().positive(positiveError).integer(integerError).required('Please inform the minimum experience'),
    // maxExperience: yup.number().positive(positiveError).integer(integerError).required('Please inform the maximum experience'),
  })
  .required();

export function DetailsStep() {
  const {
    setValue,
    trigger,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const dispatch = useAppDispatch();

  const detail = useAppSelector((s) => s.jobReqWizardCreate.detail);

  const validateStep = useCallback(() => {
    const hasAnyNullValue = Object.values(detail).includes(null);
    dispatch(jobReqToggleNextStepAvailable(!hasAnyNullValue));
  }, [detail, dispatch]);

  const handleChangeJobPosition: AutocompleteOnChange<JobPositionInputType> =
    useCallback(
      ({ input }) => {
        setValue('jobPosition', input);
        dispatch(jobReqSetDetails({ ...detail, jobPosition: input }));
        trigger('jobPosition');
      },
      [detail, dispatch, setValue, trigger]
    );

  const handleChangeTeam: AutocompleteOnChange<TeamInputType> = useCallback(
    ({ input }) => {
      setValue('team', input);
      dispatch(jobReqSetDetails({ ...detail, team: input }));
      trigger('team');
    },
    [detail, dispatch, setValue, trigger]
  );

  useEffect(() => validateStep(), [detail, errors, validateStep]);

  return (
    <>
      {/* POSITION */}

      <Section
        title="Position"
        description="Select the job position related to this job requisition"
      >
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Autocomplete
            id="jobPosition"
            disablePortal
            options={sampleJobPositions}
            sx={{ width: '100%' }}
            renderInput={(params) => (
              <TextField
                label="Job Position"
                error={!!errors.jobPosition}
                helperText={errors.jobPosition?.message}
                {...params}
              />
            )}
            onChange={(_, input) => handleChangeJobPosition({ input })}
          />
        </Box>
      </Section>

      {/* TEAM */}

      <Section
        title="Team"
        description="Select the team for which you want to create this job requisition"
      >
        <Autocomplete
          id="team"
          disablePortal
          options={sampleTeams}
          sx={{ width: '100%' }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Team"
              error={!!errors.team}
              helperText={errors.team?.message}
            />
          )}
          onChange={(_, input) => handleChangeTeam({ input })}
        />
      </Section>
    </>
  );
}
