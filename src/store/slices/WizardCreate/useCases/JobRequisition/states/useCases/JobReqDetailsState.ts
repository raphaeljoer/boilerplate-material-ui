import { JobReq } from '../../JobReq';
import { JobReqStateProtocol } from '../protocols/JobReqStateProtocol';
import { JobReqReasonState } from './JobReqReasonState';

export class JobReqDetailsState implements JobReqStateProtocol {
  private name = 'details';

  constructor(private jobReq: JobReq) {}

  getName(): string {
    return this.name;
  }
  next(): void {
    console.log('go to reason step');
    this.jobReq.setState(new JobReqReasonState(this.jobReq));
  }
  previous(): void {
    console.log('end of line');
  }
  submit(): void {
    console.log('cannot submit in details step');
  }
}
