import { JobReqStateProtocol } from './states/protocols/JobReqStateProtocol';
import { JobReqDetailsState } from './states/useCases/JobReqDetailsState';

export class JobReq {
  private state: JobReqStateProtocol = new JobReqDetailsState(this);
  private title = '';

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
