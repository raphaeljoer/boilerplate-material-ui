import { JobReq } from '../../entities/JobReq';
import { JobReqStateProtocol } from '../protocols/JobReqStateProtocol';
import { JobReqDetailsState } from './JobReqDetailsState';
import { JobReqPostingState } from './JobReqPostingState';

export class JobReqReasonState implements JobReqStateProtocol {
  private name = 'reason';

  constructor(private jobReq: JobReq) {}

  getName(): string {
    return this.name;
  }
  next(): void {
    this.jobReq.setState(new JobReqPostingState(this.jobReq));
  }
  prev(): void {
    this.jobReq.setState(new JobReqDetailsState(this.jobReq));
  }
  validate(data: unknown): boolean {
    console.log(data);
    return false;
  }
  submit(): void {
    console.log('cannot submit in reason step');
  }
}
