'use client'

const MainContent: React.FC<{
  children: React.ReactNode
  title: string
  className?: string
}> = (props) => {
  return (
    <div className={`main-content w-full h-full ${props.className || ''}`}>
      <h4 className="text-gift_red pb-2">{props.title}</h4>
      {props.children}
    </div>
  )
}

export default MainContent
