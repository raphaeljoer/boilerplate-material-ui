import { InputType } from '../../../../../../components/WizardCreate/useCases/JobRequisition/types/InputType';

export type Detail = {
  jobPosition: InputType | null;
  team: InputType | null;
  currency: InputType | null;
  minSalary: number | null;
  maxSalary: number | null;
};

export type InitialState = {
  activeStep: number;
  isNextStepAvailable: boolean;
  isPrevStepAvailable: boolean;
  steps: string[];
  detail: Detail;
};
