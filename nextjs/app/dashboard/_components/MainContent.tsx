'use client'

const MainContent: React.FC<{
  children: React.ReactNode
  title: string
}> = (props) => {
  return (
    <div className="main-content w-full h-full">
      <span className="">{props.title}</span>
      {props.children}
    </div>
  )
}

export default MainContent
