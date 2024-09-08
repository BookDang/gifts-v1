import {
  AUTH_LOGIN_PATH,
  AUTH_REDIRECT_QUERY_PARAM,
} from '@/utilities/constants/auth.constant'
import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function authorMiddleware(request: NextRequest) {
  const accessToken = request.cookies.get('access_token')
  const url = request.nextUrl.clone()
  if (!accessToken && url.pathname !== AUTH_LOGIN_PATH) {
    url.pathname = AUTH_LOGIN_PATH
    url.searchParams.set(AUTH_REDIRECT_QUERY_PARAM, request.nextUrl.pathname)
    return NextResponse.redirect(new URL(url))
  }
  // if user is logged in and try to access login page, redirect to home page
  if (
    url.pathname.startsWith(AUTH_LOGIN_PATH) &&
    accessToken &&
    url.searchParams.get(AUTH_REDIRECT_QUERY_PARAM)
  ) {
    url.pathname = url.searchParams.get(AUTH_REDIRECT_QUERY_PARAM) || '/'
    url.searchParams.delete(AUTH_REDIRECT_QUERY_PARAM)
    return NextResponse.redirect(new URL(url))
  }
  // if user is logged in and try to access login page, redirect to home page
  if (url.pathname.startsWith(AUTH_LOGIN_PATH) && accessToken) {
    url.pathname = '/'
    url.searchParams.delete(AUTH_REDIRECT_QUERY_PARAM)
    return NextResponse.redirect(new URL(url))
  }
  const response = NextResponse.next()
  return response
}
