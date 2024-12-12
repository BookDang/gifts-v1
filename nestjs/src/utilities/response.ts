import { HttpStatus } from '@nestjs/common'
import { Response } from 'express'

export const responseError = (res: Response, error: Error) => {
  let statusCode = HttpStatus.INTERNAL_SERVER_ERROR
  let message = 'Internal Server Error'

  switch (+error.message) {
    case HttpStatus.CONFLICT: 
      message = 'Conflict Error'
      statusCode = HttpStatus.CONFLICT
      break;

    case HttpStatus.NOT_FOUND:
      message = 'Not Found Error'
      statusCode = HttpStatus.NOT_FOUND
      break;

    default:
      break;
  }
  return res.status(statusCode).jsonp({
    message: message,
    statusCode,
  })
}
