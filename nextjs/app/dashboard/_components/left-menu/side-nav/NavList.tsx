import React from 'react'
import Link from 'next/link'
import { PiUsersThree, PiGiftLight } from 'react-icons/pi'
import { RiHistoryLine } from 'react-icons/ri'
import { IoIosLogOut } from 'react-icons/io'

const NavList: React.FC = () => {
  return (
    <div className="grow">
      <div className="flex flex-col justify-between h-full">
        <ul className="mt-4 flex flex-col gap-y-1">
          <li>
            <Link
              href="/dashboard"
              className="text-[#797979] flex py-2 px-5 gap-x-2 items-center 
                hover:bg-[#00c1e4] hover:text-[#FFFFFF] hover:rounded-md
                active border border-cyan-500 border-solid rounded-md
              "
            >
              <PiUsersThree className="w-6 h-6" /> Users
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="text-[#797979] flex py-2 px-5 gap-x-2 items-center 
                hover:bg-[#00c1e4] hover:text-[#FFFFFF] hover:rounded-md"
            >
              <PiGiftLight className="w-6 h-6" /> Gifts
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="text-[#797979] flex py-2 px-5 gap-x-2 items-center 
                hover:bg-[#00c1e4] hover:text-[#FFFFFF] hover:rounded-md"
            >
              <RiHistoryLine className="w-6 h-6" /> Histories
            </Link>
          </li>
        </ul>
        <div className="border-t border-t-cyan-500 border-solid pt-2">
          <Link
            href="/dashboard"
            className="text-[#797979] flex py-2 px-5 gap-x-2 items-center 
              hover:bg-[#00c1e4] hover:text-[#FFFFFF] hover:rounded-md"
          >
            Logout <IoIosLogOut className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavList
