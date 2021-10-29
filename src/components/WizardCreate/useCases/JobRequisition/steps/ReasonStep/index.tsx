//material-ui
import { TextField } from '@mui/material';
//resources
import React, { useCallback, useEffect } from 'react';
import { Section } from '../../../../presentation/components';
//data
import { useAppDispatch, useAppSelector } from 'hooks';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validations/schema';
import { jobReqControlSetNextStepAvailable } from 'store/slices/WizardCreate/useCases/jobReqWizardCreate/control';
import { jobReqDataSetReason } from 'store/slices/WizardCreate/useCases/jobReqWizardCreate/data';

type InputOnChange = (
  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  value?: string | number
) => void;

export function ReasonStep() {
  const {
    setValue,
    trigger,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const dispatch = useAppDispatch();
  const reason = useAppSelector((s) => s.wizardCreate.jobReq.data.reason);

  const handleChangeInput: InputOnChange = useCallback(
    async (e) => {
      const id = e.target.id;
      const value = e.target.value;
      setValue(id, value);
      dispatch(jobReqDataSetReason(value));
      await trigger(id);
    },
    [dispatch, setValue, trigger]
  );

  useEffect(() => {
    const isNull = !reason;
    const hasErrors = Object.values(errors).length !== 0;
    dispatch(jobReqControlSetNextStepAvailable(!isNull && !hasErrors));
  });

  return (
    <Section
      title="Reason"
      description="Explain the reason why you are creating this job requisition"
    >
      <TextField
        id="reason"
        label="Reason"
        fullWidth
        multiline
        focused
        minRows={6}
        type="text"
        defaultValue={reason}
        helperText={errors.reason?.message}
        error={!!errors.reason}
        onChange={handleChangeInput}
      />
    </Section>
  );
}
