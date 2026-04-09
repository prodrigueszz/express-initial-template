export class Result<T> {
  private readonly value?: T;
  private readonly error?: Error;
  private readonly success: boolean;

  private constructor(success: boolean, value?: T, error?: Error) {
    this.success = success;
    this.error = error
    this.value = value;    
  }

  static ok<T>(value: T): Result<T> {
    return new Result<T>(true, value);
  }

  static error<T>(error: Error): Result<T> {
    return new Result<T>(false, undefined, error);
  }

  isSuccess(): boolean {
    return this.success;
  }

  get(): T | Error {
    if (!this.success) {
      return this.error!
    }
    return this.value!
  }
 }