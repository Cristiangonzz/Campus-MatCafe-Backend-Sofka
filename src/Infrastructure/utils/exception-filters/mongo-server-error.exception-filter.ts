import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { MongoServerError } from 'mongodb';

/**
 * MongoServerErrorExceptionFilter class
 *
 * @export
 * @class MongoServerErrorExceptionFilter
 * @typedef {MongoServerErrorExceptionFilter}
 * @implements {ExceptionFilter<MongoServerError>}
 */
@Catch(MongoServerError)
export class MongoServerErrorExceptionFilter
  implements ExceptionFilter<MongoServerError>
{
  /**
   * Description placeholder
   *
   * @param {MongoServerError} exception - exception
   * @param {ArgumentsHost} host - host
   */
  catch(exception: MongoServerError, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const message = exception.message;
    const statusCode = HttpStatus.CONFLICT;
    const details = exception;

    response.status(statusCode).json({ statusCode, message, details });
  }
}
