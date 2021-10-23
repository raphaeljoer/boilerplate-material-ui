import { JobReqDirector } from '../../director/JobReqDirector';
import { JobReqStateProtocol } from '../protocols/JobReqStateProtocol';

export class JobReqStateSubmit implements JobReqStateProtocol {
  private name = 'submit';

  constructor(private jobReq: JobReqDirector) {}

  getName(): string {
    return this.name;
  }
  next(): void {
    console.log('end of line');
  }
  previous(): void {
    console.log('go to posting step');
  }
  submit(): void {
    console.log('submited!');
  }
}
