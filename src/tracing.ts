export type AsyncFunction<T, A extends any[], R> = (this: T, ...args: A) => Promise<R>;

export type Span = {
  origin: Tracing;
  parent: Span | null;
  name: string;
  depth: number;
  start: number;
  stop: number;
  enter(): void;
  exit(err?: unknown): void;
  trace(msg?: string): void;
  trace(details?: object, msg?: string): void;
};

export type SpanCallback<T> = (span: Span) => Promise<T>;

export type TracingSpanOptions = {
  root?: boolean;
};

export type TracingWrapOptions = TracingSpanOptions & {
  bind?: boolean;
};

export type Tracing = {
  tag: string;
  child(tag: string): Tracing;
  head(): Span;
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
