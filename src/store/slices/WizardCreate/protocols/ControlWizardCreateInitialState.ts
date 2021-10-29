export type StateControlWizardCreate =
  | 'pending'
  | 'submitting'
  | 'error'
  | 'success';

export type ControlWizardCreateInitialState = {
  state: StateControlWizardCreate;
  activeStep: number;
  isNextStepAvailable: boolean;
  isPrevStepAvailable: boolean;
  steps: string[];
};
