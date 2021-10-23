export interface WizardCreateStateProtocol {
  getName(): string;
  next(): void;
  prev(): void;
  validate(data: unknown): boolean;
  submit(): void;
}
