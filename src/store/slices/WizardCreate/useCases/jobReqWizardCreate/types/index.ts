import { InitialWizardCreateState } from 'store/slices/WizardCreate/protocols/initialState';
import { InputType } from '../../../../../../components/WizardCreate/useCases/JobRequisition/types/InputType';

export type Detail = {
  jobPosition: InputType | null;
  team: InputType | null;
  currency: InputType | null;
  minSalary: number | null;
  maxSalary: number | null;
};

export type InitialState = InitialWizardCreateState & {
  steps: string[];
  detail: Detail;
  reason: string | null;
};
