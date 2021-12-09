import { ControlCreationWizardInitialState } from 'store/slices/CreationWizard/protocols/ControlCreationWizardInitialState';

type Step = 'details' | 'reason' | 'posting' | 'submit';

export type JobReqControlCreationWizardInitialState =
  ControlCreationWizardInitialState & {
    steps: Step[];
  };
