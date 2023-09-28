"use client"

import React from 'react'
import SideMenu from './SideBar/components copy/SideMenu'
import { GiHamburgerMenu} from 'react-icons/gi'
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'
import useLocalStorage from '@/utils/hooks/useLocalStorage'

interface IProp{
   setThemeDark: React.Dispatch<React.SetStateAction<boolean>>
}
function TopNav({setThemeDark}:IProp) {

const [themeMode, setThemeMode] = useLocalStorage('themeMode',false)
const toggleTheme = (state:boolean)=>{
setThemeMode(state)
setThemeDark(state)
}

  return (
    <div className="top mb-5">
    <button type='button' id='menu-btn'><GiHamburgerMenu/></button>
    <div className='theme__toggler'>
       <span className= {!themeMode?'active':undefined} onClick={()=>toggleTheme(false)}><BsSunFill/></span> 
       <span className= {themeMode?'active':undefined} onClick={()=>toggleTheme(true)}><BsFillMoonStarsFill/></span>         
     </div> 
     <div className="profile">
         <div className="info">
             <p>Hey <strong>Ndubuisi</strong></p>
             <small className='text__muted'>Admin</small>
         </div>
         <div className="profile__photo">
             <img src="/assets/images/users/pic1.jpg" alt="" />
         </div>
     </div>

 </div>
  )
}

export default TopNav
