'use client'

import React from 'react'

interface LayoutProviderProps {
  children: React.ReactNode
}
export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  return <>{children}</>
}

export default LayoutProvider
