import { ControlWizardCreateInitialState } from 'store/slices/WizardCreate/protocols/ControlWizardCreateInitialState';

type Step = 'details' | 'reason' | 'posting' | 'submit';

export type JobReqControlWizardCreateInitialState =
  ControlWizardCreateInitialState & {
    steps: Step[];
  };
