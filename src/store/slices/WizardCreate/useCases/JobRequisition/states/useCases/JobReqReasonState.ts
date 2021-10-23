import { JobReq } from '../../JobReq';
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
    console.log('go to posting step');
    this.jobReq.setState(new JobReqPostingState(this.jobReq));
  }
  previous(): void {
    console.log('go to details back');
    this.jobReq.setState(new JobReqDetailsState(this.jobReq));
  }
  submit(): void {
    console.log('cannot submit in reason step');
  }
}
