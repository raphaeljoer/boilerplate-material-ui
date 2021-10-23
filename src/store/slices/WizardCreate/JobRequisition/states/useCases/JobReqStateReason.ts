import { JobReqDirector } from '../../director/JobReqDirector';
import { JobReqStateProtocol } from '../protocols/JobReqStateProtocol';

export class JobReqStateReason implements JobReqStateProtocol {
  private name = 'reason';

  constructor(private jobReq: JobReqDirector) {}

  getName(): string {
    return this.name;
  }
  next(): void {
    console.log('go to posting step');
  }
  previous(): void {
    console.log('go to details back');
  }
  submit(): void {
    console.log('cannot submit in reason step');
  }
}
