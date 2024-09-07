'use client'

import React from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation'

const NavPage = () => {
  const pathname = usePathname()
  const [cookieValue, setCookieValue] = React.useState<string | undefined>(
    Cookies.get('access_token'),
  )

  React.useEffect(() => {
    const newValue = Cookies.get('client_access_token')
    console.log('pathname', pathname)
    console.log('newValue', newValue)
    setCookieValue(newValue)
    return () => {}
  }, [Cookies.get('client_access_token'), pathname])

  return (
    <nav
      className="py-4 sticky top-0 left-0 w-full z-50"
      style={{
        background: 'rgba(12, 12, 140, 0.2)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(7px)',
        WebkitBackdropFilter: 'blur(7px)',
      }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link
              href="/"
              className="text-white font-bold text-xl hover:border-b hover:border-white"
            >
              Logo
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href={cookieValue ? '/logout' : '/login'}
              className="text-white font-medium hover:border-b hover:border-white"
            >
              {cookieValue ? 'Logout' : 'Login'}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavPage
