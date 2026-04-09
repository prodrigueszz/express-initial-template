import { ApiError } from '@/utils/errors/api-error.js'

export const HttpErrors = {
  BAD_REQUEST: "Bad Request",
  NOT_FOUND: "Not Found",
  UNAUTHORIZED: "Unauthorized",
  INTERNAL_SERVER_ERROR: "Internal Server Error"
} as const;

export class BadRequestError extends ApiError {
  constructor(message: string = HttpErrors.BAD_REQUEST) {
    super(400, message);
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string = HttpErrors.NOT_FOUND) {
    super(404, message);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message: string = HttpErrors.UNAUTHORIZED) {
    super(401, message);
  }
}

export class InternalServerError extends ApiError {
  constructor(message: string = HttpErrors.INTERNAL_SERVER_ERROR) {
    super(500, message);
  }
}