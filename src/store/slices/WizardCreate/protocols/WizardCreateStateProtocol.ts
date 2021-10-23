export interface WizardCreateStateProtocol {
  getName(): string;
  next(): void;
  previous(): void;
  submit(): void;
}
