import * as yup from 'yup';

type Props = {
  minSalary: number | null;
  minExperience: number | null;
};

export function schema({ minSalary, minExperience }: Props) {
  return yup
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
        .moreThan(0, 'Salary must be greater than 0')
        .typeError('Enter a number')
        .required('Please inform the minimum salary'),
      maxSalary: yup
        .number()
        .typeError('Enter a number')
        .moreThan(
          minSalary || 100,
          `Salary must be greater than ${minSalary || 100}`
        )
        .required('Please inform the minimum salary'),
      minExperience: yup
        .number()
        .moreThan(0, 'Experience must be greater than 0')
        .typeError('Enter a number')
        .required('Please inform the minimum experience'),
      maxExperience: yup
        .number()
        .moreThan(
          minExperience || 1,
          `Experience must be greater than ${minExperience || 1}`
        )
        .typeError('Enter a number')
        .required('Please inform the minimum experience')
    })
    .required();
}
