import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { authorMiddleware } from './middlewares/auth.middleware'

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/users') ||
    request.nextUrl.pathname.startsWith('/login')
  ) {
    return authorMiddleware(request)
  }
  return NextResponse.next()
}
