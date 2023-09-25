import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import Navlinks from './Navlinks'
import Logo from './Logo'
import { useDashboardContext } from '../pages/DashboardLayout'

const BigSideBar = () => {
  const {showSidebar} = useDashboardContext()
  return (
    <Wrapper>
      <div className={showSidebar?'sidebar-container show-sidebar':'sidebar-container'}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSideBar