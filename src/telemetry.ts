import { type AsyncFunction, type SpanCallback, type Tracing } from './tracing';

export type Telemetry = {
  (msg?: string): void;
  (details?: object, msg?: string): void;
  
  tracing: Tracing;
  
  child(name: string): Telemetry;
  
  span<T>(name: string, callback: SpanCallback<T>): Promise<T>;
  wrap<T, A extends any[], R>(name: string, fn: AsyncFunction<T, A, R>): AsyncFunction<T, A, R>;
  trace(msg?: string): void;
  trace(details?: object, msg?: string): void;
};
