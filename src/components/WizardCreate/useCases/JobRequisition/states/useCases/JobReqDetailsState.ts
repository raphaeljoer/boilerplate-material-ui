import { JobReq } from '../../entities/JobReq';
import { JobReqStateProtocol } from '../protocols/JobReqStateProtocol';
import { JobReqReasonState } from './JobReqReasonState';

export class JobReqDetailsState implements JobReqStateProtocol {
  private name = 'details';

  constructor(private jobReq: JobReq) {}

  getName(): string {
    return this.name;
  }
  next(): void {
    this.jobReq.setState(new JobReqReasonState(this.jobReq));
  }
  prev(): void {
    console.log('end of line');
  }
  validate(data: unknown): boolean {
    console.log(data);
    return false;
  }
  submit(): void {
    console.log('cannot submit in details step');
  }
}
