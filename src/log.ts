import { type Labels } from './common';

export type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';

export type LogFn = {
  (msg?: string): void;
  (details?: object, msg?: string): void;
};

export type LogChildParams = {
  labels?: Labels;
  details?: object;
};

export type Log = {
  child(params?: LogChildParams): Log;
  trace: LogFn;
  debug: LogFn;
  info: LogFn;
  warn: LogFn;
  error: LogFn;
  fatal: LogFn;
};
