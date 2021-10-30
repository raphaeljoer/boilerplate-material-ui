export type StateControlCreationWizard =
  | 'pending'
  | 'submitting'
  | 'error'
  | 'success';

export type ControlCreationWizardInitialState = {
  state: StateControlCreationWizard;
  activeStep: number;
  isNextStepAvailable: boolean;
  isPrevStepAvailable: boolean;
  steps: string[];
};
