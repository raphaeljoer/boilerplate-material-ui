import { JobReq } from '../../entities/JobReq';
import { JobReqStateProtocol } from '../protocols/JobReqStateProtocol';
import { JobReqReasonState } from './JobReqReasonState';
import { JobReqSubmitState } from './JobReqSubmitState';

export class JobReqPostingState implements JobReqStateProtocol {
  private name = 'posting';

  constructor(private jobReq: JobReq) {}

  getName(): string {
    return this.name;
  }
  next(): void {
    this.jobReq.setState(new JobReqSubmitState(this.jobReq));
  }
  prev(): void {
    this.jobReq.setState(new JobReqReasonState(this.jobReq));
  }
  validate(data: unknown): boolean {
    console.log(data);
    return false;
  }
  submit(): void {
    console.log('cannot submit in posting step');
  }
}
