import * as yup from 'yup';

export const schema = yup
  .object({
    jobTitle: yup
      .string()
      .typeError('Enter a valid job title')
      .required('Enter a job title'),
    jobDescription: yup
      .string()
      .typeError('Enter a valid job description')
      .required('Enter a job description')
  })
  .required();
