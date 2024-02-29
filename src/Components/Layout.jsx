import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'

const Layout = () => {
  return (
    <>
    <div className='h-[100vh] w-[100vw] fixed '>
    <Header/>
    <Outlet/>

    </div>
    </>
  )
}

export default Layout;