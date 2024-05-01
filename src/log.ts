export type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal' | 'silent';

export type LogFn = {
  (msg?: string): void;
  (details?: object, msg?: string): void;
};

export type Log = {
  child(details?: object): Log;
  trace: LogFn;
  debug: LogFn;
  info: LogFn;
  warn: LogFn;
  error: LogFn;
  fatal: LogFn;
};
