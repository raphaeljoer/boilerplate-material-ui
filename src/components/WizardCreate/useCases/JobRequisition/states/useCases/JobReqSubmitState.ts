import { JobReq } from '../../entities/JobReq';
import { JobReqStateProtocol } from '../protocols/JobReqStateProtocol';
import { JobReqPostingState } from './JobReqPostingState';

export class JobReqSubmitState implements JobReqStateProtocol {
  private name = 'submit';

  constructor(private jobReq: JobReq) {}

  getName(): string {
    return this.name;
  }
  next(): void {
    console.log('end of line');
  }
  prev(): void {
    this.jobReq.setState(new JobReqPostingState(this.jobReq));
  }
  validate(data: unknown): boolean {
    console.log(data);
    return false;
  }
  submit(): void {
    console.log('submited!');
  }
}
