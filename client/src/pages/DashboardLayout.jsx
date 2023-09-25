import React, { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { Navbar, SmallSidebar } from '../components'
import BigSideBar from '../components/BigSidebar'
import { checkDefaultTheme } from '../App'

const DashboardContext = createContext()

const DashboardLayout = () => {
  // temporary
  const user = {name:'john'};
  const [showSidebar,setShowSidebar] = useState(false);
  const [isDarkTheme,setIsDarkTheme] = useState(checkDefaultTheme);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    document.body.classList.toggle('dark-theme', !isDarkTheme)
    localStorage.setItem('darkTheme',!isDarkTheme)
  }

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const logoutUser = async () => {
    console.log("Logg ut bruker");
  }

  return (
    <DashboardContext.Provider value={{user,showSidebar,isDarkTheme,toggleDarkTheme,toggleSidebar,logoutUser}}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSideBar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;