import { JobReqStateProtocol } from '../states/protocols/JobReqStateProtocol';
import { JobReqStateDetails } from '../states/useCases/JobReqStateDetails';

export class JobReqDirector {
  private state: JobReqStateProtocol = new JobReqStateDetails(this);

  getState(): JobReqStateProtocol {
    return this.state;
  }

  setState(state: JobReqStateProtocol): void {
    this.state = state;
  }

  getStateName(): string {
    return this.state.getName();
  }

  next(): void {
    this.state.next();
  }

  previous(): void {
    this.state.previous();
  }

  submit(): void {
    this.state.submit();
  }
}
