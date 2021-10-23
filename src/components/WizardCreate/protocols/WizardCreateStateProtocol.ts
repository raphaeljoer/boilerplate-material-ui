export interface WizardCreateStateProtocol {
  getName(): string;
  next(): void;
  prev(): void;
  submit(): void;
}
