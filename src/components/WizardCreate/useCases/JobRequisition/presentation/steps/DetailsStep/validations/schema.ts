import * as yup from 'yup';

export const schema = yup
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
