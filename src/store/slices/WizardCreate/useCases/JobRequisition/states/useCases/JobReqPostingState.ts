import { JobReq } from '../../JobReq';
import { JobReqStateProtocol } from '../protocols/JobReqStateProtocol';

export class JobReqPostingState implements JobReqStateProtocol {
  private name = 'posting';

  constructor(private jobReq: JobReq) {}

  getName(): string {
    return this.name;
  }
  next(): void {
    console.log('go to submit step');
  }
  previous(): void {
    console.log('go to reason back');
  }
  submit(): void {
    console.log('cannot submit in posting step');
  }
}
