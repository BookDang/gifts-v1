import React from 'react'
import Image from 'next/image'
import MainContent from '@/app/dashboard/_components/MainContent'

const Dashboard: React.FC = () => {
  return (
    <MainContent title="Dashboard">
      <div className="w-full h-full relative">
        <Image
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/images/gifts.png"
          width={200}
          height={200}
          alt="Love gifts"
        />
      </div>
    </MainContent>
  )
}

export default Dashboard
