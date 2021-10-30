import { ControlCreationWizardInitialState } from 'store/slices/CreationWizard/protocols/ControlCreationWizardInitialState';
import { InputType } from '../../../../../../components/CreationWizard/useCases/JobRequisition/types/InputType';

export type Detail = {
  jobPosition: InputType | null;
  team: InputType | null;
  currency: InputType | null;
  minSalary: number | null;
  maxSalary: number | null;
  minExperience: number | null;
  maxExperience: number | null;
};

export type Posting = {
  jobTitle: string | null;
  jobDescription: string | null;
};

export type InitialState = ControlCreationWizardInitialState & {
  steps: string[];
  detail: Detail;
  reason: string | null;
  posting: Posting;
};
