import React from 'react'
import LeftMenu from '@/app/dashboard/_components/left-menu/LeftMenu'

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      <LeftMenu />
      <main className="bg-[#f0f0f0] w-full h-screen overflow-hidden p-4">
        <h1>Dashboard</h1>
      </main>
    </div>
  )
}

export default Dashboard
