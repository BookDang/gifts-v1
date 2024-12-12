import React from 'react'
import NavList from '@/app/dashboard/_components/left-menu/side-nav/NavList'

const LeftMenu: React.FC = () => {
  return (
    <div className='w-80 leftmenu-wrapper border-r border-slate-50 border-solid shadow-slate-50 p-4 flex flex-col'>
      <h1 className=' text-[#02afd4] font-semibold text-2xl leading-7'>Dashboard</h1>
      <NavList />
    </div>
  )
}

export default LeftMenu