import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './transition.css'

export default function Layout() {

  // how to find the paths of the website 
  const location = useLocation();
  console.log(location.pathname); // console logging

  return (
   <div>
    <NavBar/>
    <SwitchTransition>
      <CSSTransition timeout={200} classNames='fade' key={location.pathname}>
      <div className=' max-w-6xl mx-auto p-3'>
    <Outlet />
    </div>
      </CSSTransition>
    </SwitchTransition>
   </div>
  )
}
