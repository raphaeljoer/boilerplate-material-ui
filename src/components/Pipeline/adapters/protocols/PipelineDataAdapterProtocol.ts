import { PipelineProps } from '../../types';

export interface PipelineDataAdapterProtocol {
  adapt(data: unknown): PipelineProps;
}
