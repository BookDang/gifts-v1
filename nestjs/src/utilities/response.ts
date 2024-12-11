import { HttpStatus } from '@nestjs/common'
import { Response } from 'express'

export const responseError = (res: Response, error: Error) => {
  const statusCode =
    HttpStatus.CONFLICT === +error.message
      ? HttpStatus.CONFLICT
      : HttpStatus.INTERNAL_SERVER_ERROR
  const message =
    HttpStatus.CONFLICT === +error.message
      ? 'Conflict Error'
      : 'Internal Server Error'
  return res.status(statusCode).jsonp({
    message: message,
    statusCode,
  })
}
