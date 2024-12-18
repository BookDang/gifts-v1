'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoIosLogOut } from 'react-icons/io'
import { menuItems } from '@/app/dashboard/_data/menu_items'

type NavListProps = {
  isLeftMenuOpen?: boolean
}

const NavList: React.FC<NavListProps> = ({ ...props }) => {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <div className="grow">
      <nav className="flex flex-col justify-between h-full">
        <ul className="mt-4 flex flex-col gap-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className={`text-[#797979] flex py-2 gap-x-2 items-center justify-between
                    hover:text-gift_red
                    overflow-hidden ${
                      pathname === item.path
                        ? 'border-b border-b-gift_red border-b-solid text-gift_red active'
                        : ''
                    }`}
              >
                <span
                  className={`transition-width duration-300 ${
                    props.isLeftMenuOpen ? 'w-full' : 'w-0'
                  } overflow-hidden`}
                >
                  {item.name}
                </span>
                <span>{item.icon}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-t border-t-cyan-500 border-solid pt-2">
          <Link
            href="/dashboard"
            className="text-[#797979] flex py-2 gap-x-2 items-center justify-between
              hover:bg-gift_blue hover:text-[#FFFFFF] hover:rounded-md"
          >
            <span
              className={`transition-all duration-300 ${
                props.isLeftMenuOpen ? 'w-full' : 'w-0'
              } overflow-hidden`}
            >
              Logout
            </span>
            <IoIosLogOut className="w-6 h-6" />
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default NavList
