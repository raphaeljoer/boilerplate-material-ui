export interface JobReqStateProtocol {
  getName(): string;
  next(): void;
  previous(): void;
  submit(): void;
}
