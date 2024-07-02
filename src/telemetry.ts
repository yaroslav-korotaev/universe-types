import { type Labels } from './common';
import { type LogFn, type Log } from './log';
import {
  type CounterParams,
  type Counter,
  type GaugeParams,
  type Gauge,
  type HistogramParams,
  type Histogram,
  type SummaryParams,
  type Summary,
  type Metrics,
} from './metrics';
import {
  type AsyncFunction,
  type SpanCallback,
  type TracingSpanOptions,
  type TracingWrapOptions,
  type Tracing,
} from './tracing';

export type TelemetryChildOptions = {
  labels?: Labels;
  details?: object;
};

export type Telemetry = {
  log: Log;
  metrics: Metrics;
  tracing: Tracing;
  
  destroy(): void;
  child(tag: string, options?: TelemetryChildOptions): Telemetry;
  
  debug: LogFn;
  info: LogFn;
  warn: LogFn;
  error: LogFn;
  
  counter(params: CounterParams): Counter;
  gauge(params: GaugeParams): Gauge;
  histogram(params: HistogramParams): Histogram;
  summary(params: SummaryParams): Summary;
  
  span<T>(
    name: string,
    callback: SpanCallback<T>,
    options?: TracingSpanOptions,
  ): Promise<T>;
  wrap<T, A extends any[], R>(
    name: string,
    fn: AsyncFunction<T, A, R>,
    options?: TracingWrapOptions,
  ): AsyncFunction<T, A, R>;
  
  trace(msg?: string): void;
  trace(details?: object, msg?: string): void;
};
