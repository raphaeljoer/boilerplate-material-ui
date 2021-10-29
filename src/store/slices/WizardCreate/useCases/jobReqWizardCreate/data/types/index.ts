import { InputType } from '../../../../../../../components/WizardCreate/useCases/JobRequisition/types/InputType';

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

export type InitialState = {
  detail: Detail;
  reason: string | null;
  posting: Posting;
};
