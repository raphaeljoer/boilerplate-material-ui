//material-ui
import { Autocomplete, Box, InputAdornment, TextField } from '@mui/material';
//resources
import React, { useCallback, useEffect } from 'react';
import { Section } from '../../components';
//data
import { sampleJobPositions } from '../../../data/samples/jobPositions';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  jobReqSetDetails,
  jobReqToggleNextStepAvailable
} from 'store/slices/WizardCreate/useCases/jobReqWizardCreate';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { sampleTeams } from '../../../data/samples/teams';
import { sampleCurrencies } from '../../../data/samples/currencies';
import { InputType } from '../../../types/InputType';

const salaryAdornment = <InputAdornment position="end">$</InputAdornment>;

// const experienceAdornment = (
//   <InputAdornment position="end">
//     years</InputAdornment>
// );

type AutocompleteOnChange<T> = (
  e: React.SyntheticEvent<Element, Event>,
  input: T | null,
  id: string
) => void;

type InputOnChange = (
  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  value?: string | number
) => void;

const schema = yup
  .object({
    jobPosition: yup
      .object()
      .typeError('Select a job position')
      .required('Select a job position'),
    team: yup
      .object()
      .typeError('Select a team')
      .required('Please choose a team'),
    currency: yup
      .object()
      .typeError('Select a currency')
      .required('Select a currency'),
    minSalary: yup
      .number()
      .moreThan(100, 'Salary must be greater than 100')
      .typeError('Enter a number')
      .integer('Enter a integer value')
      .positive('Must be a valid salary')
      .required('Please inform the minimum salary'),
    maxSalary: yup
      .number()
      .moreThan(100, 'Salary must be greater than 100')
      .typeError('Enter a number')
      .integer('Enter a integer value')
      .positive('Must be a valid salary')
      .required('Please inform the minimum salary')
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

  const handleChangeAutocomplete: AutocompleteOnChange<InputType> = useCallback(
    async (e, input, id) => {
      console.log(`${id} changed`);
      setValue(id, input);
      dispatch(jobReqSetDetails({ ...detail, [id]: input }));
      await trigger(id);
    },
    [detail, dispatch, setValue, trigger]
  );

  const handleChangeInput: InputOnChange = useCallback(
    async (e) => {
      const id = e.target.id;
      const value = e.target.value;
      setValue(id, value);
      dispatch(jobReqSetDetails({ ...detail, [id]: value }));
      await trigger(id);
    },
    [detail, dispatch, setValue, trigger]
  );

  useEffect(() => {
    const hasNullValues = Object.values(detail).includes(null);
    const hasErrors = Object.values(errors).length !== 0;
    dispatch(jobReqToggleNextStepAvailable(!hasNullValues && !hasErrors));
  });

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
            onChange={(e, input) =>
              handleChangeAutocomplete(e, input, 'jobPosition')
            }
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
          onChange={(e, input) => handleChangeAutocomplete(e, input, 'team')}
        />
      </Section>

      {/* SALARY */}

      <Section
        title="Salary"
        description="Enter a salary range for this type of work"
      >
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Autocomplete
            id="currency"
            disablePortal
            options={sampleCurrencies}
            sx={{ width: '20%' }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Currency"
                error={!!errors.currency}
                helperText={errors.currency?.message}
              />
            )}
            onChange={(e, input) =>
              handleChangeAutocomplete(e, input, 'currency')
            }
          />
          <TextField
            id="minSalary"
            label="Min salary"
            sx={{ width: '40%', ml: 2 }}
            type="number"
            InputProps={{
              endAdornment: salaryAdornment,
              inputProps: { min: 100, step: 100 }
            }}
            defaultValue={detail.minSalary}
            helperText={errors.minSalary?.message}
            error={!!errors.minSalary}
            onChange={handleChangeInput}
          />
          <TextField
            id="maxSalary"
            label="Max salary"
            sx={{ width: '40%', ml: 2 }}
            type="number"
            InputProps={{
              endAdornment: salaryAdornment,
              inputProps: {
                min: (Number(detail?.minSalary) || 0) + 100,
                step: 100
              }
            }}
            helperText={errors.maxSalary?.message}
            error={!!errors.maxSalary}
            onChange={handleChangeInput}
          />
        </Box>
      </Section>
    </>
  );
}
