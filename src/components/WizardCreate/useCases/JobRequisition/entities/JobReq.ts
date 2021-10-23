import { JobReqStateProtocol } from '../states/protocols/JobReqStateProtocol';
import { JobReqDetailsState } from '../states/useCases/JobReqDetailsState';

export class JobReq {
  private state: JobReqStateProtocol = new JobReqDetailsState(this);
  //details
  public jobPosition = 0;
  public team = 0;
  public office = 0;
  public currency = '';
  public minSalary = 0;
  public maxSalary = 0;
  public minExperience = 0;
  public maxExperience = 0;
  //reason
  public reason = '';
  //posting
  public title = '';
  public description = '';

  getState(): JobReqStateProtocol {
    return this.state;
  }

  setState(state: JobReqStateProtocol): void {
    this.state = state;
    console.log(`State: ${this.getStateName()}`);
  }

  getStateName(): string {
    return this.state.getName();
  }

  next(): void {
    this.state.next();
  }

  prev(): void {
    this.state.prev();
  }

  validate(data: unknown): boolean {
    return this.state.validate(data);
  }

  submit(): void {
    this.state.submit();
  }
}
