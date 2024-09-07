'use client'

import Link from 'next/link'

const navData = [
  {
    name: 'Log In',
    href: '/login',
  },
]
const NavPage = () => {
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
            {navData.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white font-medium hover:border-b hover:border-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavPage
