import { JobReqDirector } from '../../director/JobReqDirector';
import { JobReqStateProtocol } from '../protocols/JobReqStateProtocol';

export class JobReqStateDetails implements JobReqStateProtocol {
  private name = 'details';

  constructor(private jobReq: JobReqDirector) {}

  getName(): string {
    return this.name;
  }
  next(): void {
    console.log('go to reason step');
  }
  previous(): void {
    console.log('you cant go back');
  }
  submit(): void {
    console.log('cannot submit in details step');
  }
}
