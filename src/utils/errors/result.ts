import type { ApiError } from "./api-error.js";

export class Result<T> {
  private readonly _value?: T;
  private readonly _error?: ApiError;
  private readonly _success: boolean;

  private constructor(success: boolean, value?: T, error?: ApiError) {
    this._success = success;
    this._error = error
    this._value = value;    
  }

  static ok<T>(value: T): Result<T> {
    return new Result<T>(true, value);
  }

  static error<T>(error: ApiError): Result<T> {
    return new Result<T>(false, undefined, error);
  }

  get success(): boolean {
    return this._success;
  }

  get error(): ApiError {
    return this._error!;
  }

  get value(): T {
    return this._value!;
  }
 }
