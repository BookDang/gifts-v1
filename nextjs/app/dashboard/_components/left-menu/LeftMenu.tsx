'use client'

import React from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import NavList from '@/app/dashboard/_components/left-menu/side-nav/NavList'

const LeftMenu: React.FC = () => {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = React.useState<boolean>(true)

  const toggleLeftMenu = () => {
    return () => {
      setIsLeftMenuOpen(!isLeftMenuOpen)
    }
  }

  return (
    <div className={`${isLeftMenuOpen ? 'w-80' : 'w-[4.25rem]'} leftmenu-wrapper border-r border-slate-50 border-solid shadow-slate-50 p-4 overflow-hidden flex flex-col transition-all duration-1000`}>
      <div className="flex justify-between">
        <h1 className={`text-gift_red font-semibold text-2xl leading-7 ${isLeftMenuOpen ? 'w-full' : 'w-0'} transition-all duration-1000 overflow-hidden`}>
          Dashboard
        </h1>
        <button className="cursor-pointer" onClick={toggleLeftMenu()}>
          <MdOutlineKeyboardArrowLeft className={`w-6 h-6 text-gift_red transition-all duration-1000 ${isLeftMenuOpen ? '' : 'rotate-180'}`}
           />
        </button>
      </div>
      <NavList isLeftMenuOpen={isLeftMenuOpen} />
    </div>
  )
}

export default LeftMenu
