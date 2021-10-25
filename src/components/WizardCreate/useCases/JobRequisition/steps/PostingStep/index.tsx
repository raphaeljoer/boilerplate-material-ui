//material-ui
import { InputAdornment, TextField, Typography } from '@mui/material';
//resources
import React, { useCallback, useEffect } from 'react';
import { Section } from '../../../../presentation/components';
//data
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  jobReqSetPosting,
  jobReqToggleNextStepAvailable
} from 'store/slices/WizardCreate/useCases/jobReqWizardCreate';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validations/schema';
import { RiArticleLine } from 'react-icons/ri';

import ReactQuill from 'react-quill';
import * as Quill from 'quill';
import 'react-quill/dist/quill.snow.css';
import { toolbarOptions } from './options/react-quill';

const adornment = (
  <InputAdornment position="end">
    <RiArticleLine size="1.5rem" />
  </InputAdornment>
);

type InputOnChange = (
  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  value?: string | number
) => void;

type ReactQuillOnChange = (
  content: string,
  delta: Quill.Delta,
  source: Quill.Sources,
  editor: unknown
) => void;

export function PostingStep() {
  const {
    setValue,
    trigger,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const dispatch = useAppDispatch();

  const posting = useAppSelector((s) => s.jobReqWizardCreate.posting);

  const handleChangeInput: InputOnChange = useCallback(
    async (e) => {
      const id = e.target.id;
      const value = e.target.value;
      setValue(id, value);
      dispatch(jobReqSetPosting({ ...posting, [id]: value }));
      await trigger(id);
    },
    [dispatch, posting, setValue, trigger]
  );

  const handleChangeReactQuill: ReactQuillOnChange = useCallback(
    async (content) => {
      console.log(content);
      const id = 'jobDescription';
      // FIXME: ReactQuill have a bug: When you delete the last character,
      // it will return a string with a <p><br></p> so I create a workAround
      // you can probably solve this in validations schema;
      const workAround = content === '<p><br></p>' ? null : content;
      const value = workAround;
      setValue(id, value);
      dispatch(jobReqSetPosting({ ...posting, [id]: value }));
      await trigger(id);
    },
    [dispatch, posting, setValue, trigger]
  );

  useEffect(() => {
    const hasNullValues = Object.values(posting).includes(null);
    const hasErrors = Object.values(errors).length !== 0;
    dispatch(jobReqToggleNextStepAvailable(!hasNullValues && !hasErrors));
  });

  return (
    <>
      <Section
        title="Job Title"
        description="Fill in the job title for the posting. This is how it will be seen by applicants."
      >
        <TextField
          id="jobTitle"
          type="text"
          label="Job Title"
          fullWidth
          InputProps={{ endAdornment: adornment }}
          error={!!errors.jobTitle}
          helperText={errors.jobTitle?.message}
          onChange={handleChangeInput}
        />
      </Section>
      <Section
        title="Job Description"
        description="Complete the field below with the job description to inform all applicants what they need to know about this job position."
      >
        <ReactQuill
          id="jobDescription"
          theme="snow"
          value={posting.jobDescription || ''}
          onChange={handleChangeReactQuill}
          defaultValue=""
          modules={{
            toolbar: {
              container: toolbarOptions
            }
          }}
          style={{ width: '100%' }}
        />
        {errors.jobDescription?.message && (
          <Typography mt={2} variant="caption" color="error">
            {errors.jobDescription.message}
          </Typography>
        )}
      </Section>
    </>
  );
}
