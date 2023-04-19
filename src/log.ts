export type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal' | 'silent';

export type LogObject = {
  err?: Error;
  [key: string]: any;
};

export type LogFn = {
  (msg?: string): void;
  (obj: LogObject): void;
  (obj: LogObject, msg?: string): void;
};

export type Log = {
  trace: LogFn;
  debug: LogFn;
  info: LogFn;
  warn: LogFn;
  error: LogFn;
  fatal: LogFn;
  child(bindings?: object): Log;
}
