import { JobReqDirector } from '../../director/JobReqDirector';
import { JobReqStateProtocol } from '../protocols/JobReqStateProtocol';

export class JobReqStatePosting implements JobReqStateProtocol {
  private name = 'posting';

  constructor(private jobReq: JobReqDirector) {}

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
