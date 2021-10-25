//material-ui
import { Autocomplete, Box, InputAdornment, TextField } from '@mui/material';
//resources
import React, { useCallback, useEffect } from 'react';
import { Section } from '../../../../presentation/components';
//data
import { sampleJobPositions } from '../../data/samples/jobPositions';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  jobReqSetDetails,
  jobReqToggleNextStepAvailable
} from 'store/slices/WizardCreate/useCases/jobReqWizardCreate';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { sampleTeams } from '../../data/samples/teams';
import { sampleCurrencies } from '../../data/samples/currencies';
import { InputType } from '../../types/InputType';
import { schema } from './validations/schema';

const salaryAdornment = <InputAdornment position="end">$</InputAdornment>;

const experienceAdornment = (
  <InputAdornment position="end">years</InputAdornment>
);

type AutocompleteOnChange<T> = (
  e: React.SyntheticEvent<Element, Event>,
  input: T | null,
  id: string
) => void;

type InputOnChange = (
  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  value?: string | number
) => void;

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
            id="jobPosition" //Don't change this id
            disablePortal
            options={sampleJobPositions}
            sx={{ width: '100%' }}
            defaultValue={detail.jobPosition}
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
          id="team" //Don't change this id
          disablePortal
          options={sampleTeams}
          sx={{ width: '100%' }}
          defaultValue={detail.team}
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
            id="currency" //Don't change this id
            disablePortal
            options={sampleCurrencies}
            sx={{ width: '20%' }}
            defaultValue={detail.currency}
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
            id="minSalary" //Don't change this id
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
            id="maxSalary" //Don't change this id
            label="Max salary"
            sx={{ width: '40%', ml: 2 }}
            type="number"
            InputProps={{
              endAdornment: salaryAdornment,
              inputProps: {
                min: detail?.minSalary || 0 + 100,
                step: 100
              }
            }}
            defaultValue={detail.maxSalary}
            helperText={errors.maxSalary?.message}
            error={!!errors.maxSalary}
            onChange={handleChangeInput}
          />
        </Box>
      </Section>

      {/* EXPERIENCE */}

      <Section
        title="Experience"
        description="Enter the experience range (in years) required for this job"
      >
        <Box sx={{ display: 'flex', width: '100%' }}>
          <TextField
            id="minExperience" //Don't change this id
            label="Min Experience"
            sx={{ width: '50%' }}
            helperText={errors.minExperience?.message}
            error={!!errors.minExperience}
            type="number"
            InputProps={{
              endAdornment: experienceAdornment,
              inputProps: { min: 1 }
            }}
            onChange={handleChangeInput}
          />
          <TextField
            id="maxExperience" //Don't change this id
            label="Max Experience"
            sx={{ width: '50%', ml: (theme) => theme.spacing(2) }}
            helperText={errors.maxExperience?.message}
            error={!!errors.maxExperience}
            type="number"
            InputProps={{
              endAdornment: experienceAdornment,
              inputProps: { min: detail?.minExperience || 0 + 1 }
            }}
            onChange={handleChangeInput}
          />
        </Box>
      </Section>
    </>
  );
}
