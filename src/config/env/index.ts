export type Env = 'development' | 'production' | 'test';
export const env: Env = process.env.NODE_ENV;
