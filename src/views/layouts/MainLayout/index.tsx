import React, { ReactNode, useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  return (
    <>
      <SideBar
        sidebarOpen={sidebarOpen}
        onCloseSidebar={() => setSidebarOpen(false)}
      />
      <div className='md:pl-64'>
        <div className='mx-auto flex flex-col px-0'>
          <Header onOpenSidebar={() => setSidebarOpen(true)} />
          <main className='h-full flex-1 md:px-8 bg-gray-100'>{children}</main>
        </div>
      </div>
    </>
  )
}

export default MainLayout
