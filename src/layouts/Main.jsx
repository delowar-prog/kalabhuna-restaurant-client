import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../shared/Footer'

const Main = () => {
  const location=useLocation()
  const noNavFooter=location.pathname?.includes('login')||location.pathname?.includes('register')
  return (
    <div>
      { noNavFooter || <Navbar></Navbar>}
        
        <Outlet></Outlet>
       { noNavFooter || <Footer></Footer>}
        
    </div>
  )
}

export default Main