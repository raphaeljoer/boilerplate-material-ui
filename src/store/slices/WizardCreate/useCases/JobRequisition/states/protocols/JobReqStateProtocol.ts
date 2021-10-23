import { WizardCreateStateProtocol } from 'store/slices/WizardCreate/protocols/WizardCreateStateProtocol';

export interface JobReqStateProtocol extends WizardCreateStateProtocol {
  getName(): string;
  next(): void;
  previous(): void;
  submit(): void;
}
