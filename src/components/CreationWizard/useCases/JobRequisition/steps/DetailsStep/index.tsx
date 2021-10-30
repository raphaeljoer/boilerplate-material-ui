//material-ui
import { Box, InputAdornment, TextField } from '@mui/material';
//resources
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//core-components
import { Section } from '../../../../presentation/components';
//samples
import { sampleTeams } from '../../data/samples/teams';
import { sampleCurrencies } from '../../data/samples/currencies';
import { sampleJobPositions } from '../../data/samples/jobPositions';
//hooks
import { useAppDispatch, useAppSelector } from 'hooks';
//reducers
import { jobReqDataSetDetails } from 'store/slices/CreationWizard/useCases/jobReqCreationWizard/data';
import { jobReqControlSetNextStepAvailable } from 'store/slices/CreationWizard/useCases/jobReqCreationWizard/control';
//types
import { InputType } from '../../types/InputType';
import { schema } from './validations';
import { AddButton } from './components/AddButton';
import { Autocomplete } from './components/Autocomplete';
import { Info } from 'components/CreationWizard/components/Info';
import { sampleJobPositionDetails } from '../../data/samples/jobPositionDetails';

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
  const detail = useAppSelector((s) => s.creationWizard.jobReq.data.detail);

  const {
    setValue,
    trigger,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(
      schema({
        minSalary: detail.minSalary,
        minExperience: detail.minExperience
      })
    )
  });

  const dispatch = useAppDispatch();

  //TODO: This logic can potentially be encapsulated to be reused
  const handleChangeAutocomplete: AutocompleteOnChange<InputType> = useCallback(
    async (_, input, id) => {
      setValue(id, input);
      dispatch(jobReqDataSetDetails({ ...detail, [id]: input }));
      await trigger(id);
    },
    [detail, dispatch, setValue, trigger]
  );

  //TODO: This logic can potentially be encapsulated to be reused
  const handleChangeInput: InputOnChange = useCallback(
    async (e) => {
      const id = e.target.id;
      const value = e.target.value;
      setValue(id, value);
      dispatch(jobReqDataSetDetails({ ...detail, [id]: value }));
      await trigger(id);
    },
    [detail, dispatch, setValue, trigger]
  );

  //TODO: This logic can potentially be encapsulated to be reused
  useEffect(() => {
    const hasNullValues = Object.values(detail).includes(null);
    const hasErrors = Object.values(errors).length !== 0;
    dispatch(jobReqControlSetNextStepAvailable(!hasNullValues && !hasErrors));
  });

  return (
    <>
      {/* POSITION */}

      <Section
        title="Position"
        description="Select the job position related to this job requisition"
      >
        <>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Autocomplete
              id="jobPosition" //Don't change this id
              label="Job Position"
              options={sampleJobPositions}
              value={detail.jobPosition}
              errors={errors}
              sx={{ flex: 1 }}
              onChange={handleChangeAutocomplete}
            />
            <AddButton tip="Import job positions" to="/import/job-positions" />
          </Box>
          {detail.jobPosition && (
            <Box sx={{ mt: 2, mr: 8 }}>
              <Info
                caption="Job Position"
                title={sampleJobPositionDetails.external_job_title}
              />
              <Info
                caption="Internal Job Title"
                title={sampleJobPositionDetails.internal_job_title}
              />
              <Info
                caption="External Job Title"
                title={sampleJobPositionDetails.external_job_title}
              />
              <Info
                caption="Description"
                title={sampleJobPositionDetails.description}
              />
              <Info caption="Type" title={sampleJobPositionDetails.type} />
              <Info
                caption="Cost Center"
                title={sampleJobPositionDetails.cost_center}
              />
              <Info
                caption="Required Travel"
                title={sampleJobPositionDetails.required_travel ? 'Yes' : 'No'}
              />
            </Box>
          )}
        </>
      </Section>

      {/* TEAM */}

      <Section
        title="Team"
        description="Select the team for which you want to create this job requisition"
      >
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Autocomplete
            id="team" //Don't change this id
            label="Team"
            options={sampleTeams}
            value={detail.team}
            errors={errors}
            sx={{ flex: 1 }}
            onChange={handleChangeAutocomplete}
          />
          <AddButton tip="Import teams" to="/import/employees" />
        </Box>
      </Section>

      {/* SALARY */}

      <Section
        title="Salary"
        description="Enter a salary range for this type of work"
      >
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Autocomplete
            id="currency" //Don't change this id
            label="Currency"
            options={sampleCurrencies}
            value={detail.currency}
            errors={errors}
            sx={{ width: '20%' }}
            onChange={handleChangeAutocomplete}
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
                min: (Number(detail?.minSalary) || 100) + 100,
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
        <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
          <TextField
            id="minExperience" //Don't change this id
            label="Min Experience"
            fullWidth
            type="number"
            InputProps={{
              endAdornment: experienceAdornment,
              inputProps: { min: 1 }
            }}
            defaultValue={detail.minExperience}
            error={!!errors.minExperience}
            helperText={errors.minExperience?.message}
            onChange={handleChangeInput}
          />
          <TextField
            id="maxExperience" //Don't change this id
            label="Max Experience"
            fullWidth
            type="number"
            InputProps={{
              endAdornment: experienceAdornment,
              inputProps: { min: (Number(detail?.minExperience) || 1) + 1 }
            }}
            defaultValue={detail.maxExperience}
            error={!!errors.maxExperience}
            helperText={errors.maxExperience?.message}
            onChange={handleChangeInput}
          />
        </Box>
      </Section>
    </>
  );
}
