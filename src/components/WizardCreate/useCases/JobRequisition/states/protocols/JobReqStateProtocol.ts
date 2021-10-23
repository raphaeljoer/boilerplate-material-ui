import { WizardCreateStateProtocol } from 'components/WizardCreate/protocols/WizardCreateStateProtocol';

export interface JobReqStateProtocol extends WizardCreateStateProtocol {
  getName(): string;
  next(): void;
  prev(): void;
  submit(): void;
}
