import React from 'react'
import Link from 'next/link'
import { PiUsersThree, PiGiftLight } from 'react-icons/pi'
import { RiHistoryLine } from 'react-icons/ri'
import { IoIosLogOut } from 'react-icons/io'

type NavListProps = {
  isLeftMenuOpen?: boolean
}

const NavList: React.FC<NavListProps> = (props) => {
  return (
    <div className="grow">
      <div className="flex flex-col justify-between h-full">
        <ul className="mt-4 flex flex-col gap-y-1">
          <li>
            <Link
              href="/dashboard"
              className={`text-[#797979] flex py-2 gap-x-2 items-center justify-between
                hover:border-b hover:border-b-gift_red hover:border-solid hover:text-gift_red
                active border-b border-b-gift_red border-b-solid text-gift_red 
                overflow-hidden `}
            >
              <span
                className={`transition-width duration-300 ${
                  props.isLeftMenuOpen ? 'w-full' : 'w-0'
                } overflow-hidden`}
              >
                Users
              </span>
              <span>
                <PiUsersThree className="w-6 h-6" />
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="text-[#797979] flex py-2 gap-x-2 items-center justify-between
                hover:border-b hover:border-b-gift_red hover:border-solid hover:text-gift_red"
            >
              <span
                className={`transition-all duration-300 ${
                  props.isLeftMenuOpen ? 'w-full' : 'w-0'
                } overflow-hidden`}
              >
                Gifts
              </span>
              <span>
                <PiGiftLight className="w-6 h-6" />
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="text-[#797979] flex py-2 gap-x-2 items-center justify-between
                hover:border-b hover:border-b-gift_red hover:border-solid hover:text-gift_red"
            >
              <span
                className={`transition-all duration-300 ${
                  props.isLeftMenuOpen ? 'w-full' : 'w-0'
                } overflow-hidden`}
              >
                Histories
              </span>
              <span>
                <RiHistoryLine className="w-6 h-6" />
              </span>
            </Link>
          </li>
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
      </div>
    </div>
  )
}

export default NavList
