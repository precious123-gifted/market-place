import React, { forwardRef } from 'react'
import { ForwardedRef } from 'react';
import Link from 'next/link'
import { useSpring, animated } from '@react-spring/web';
import { useRef } from 'react';
import { useState } from 'react';
import logo from '../../../public/assets/trustmonialog.png'
import burgerMenu from '../../../public/assets/MenuNavigation.png'
import exitIcon from  '../../../public/assets/exiticon.png'
import Image from 'next/image'
import displayDivWhenPageLoads from '../../../public/utilities/animation';
import { useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import {screenIs} from '../../screenIs.jsx'


export default function NavigationBar (){


  const nav = useRef<HTMLDivElement>(null)
  const logoDiv = useRef<HTMLDivElement>(null)
  const aboutUsLinkRef = useRef<HTMLDivElement>(null)
  const contactLinkRef = useRef<HTMLDivElement>(null)
  const loginLinkRef = useRef<HTMLDivElement>(null)
  const businessPageButtonRef = useRef<HTMLDivElement>(null)
  const businessPageButtonRefForMobileDevice = useRef<HTMLDivElement>(null)
  const menuIconDiv = useRef<HTMLDivElement>(null)
  const sideBar = useRef<HTMLDivElement>(null)
  const icon = useRef<HTMLImageElement>(null)
  
  
  const [closed,setClosed] = useState(false)
  
  
  
  const toogleMenuState = () =>{
  console.log(closed)
  setClosed(!closed)
  
  }
  
  const menuSlideAnimation = useSpring({
  
  to:{left:closed? '51%' : !closed? '100%' : ''},
  config:{duration: 0o500}
  
  
  })
  
  
let renderAnimation = useEffect(()=>{
  displayDivWhenPageLoads(nav,0.5,0o300)
  displayDivWhenPageLoads(logoDiv,0.8,100)
  displayDivWhenPageLoads(aboutUsLinkRef,0.5,400)
  displayDivWhenPageLoads(contactLinkRef,0.5,600)
  displayDivWhenPageLoads(loginLinkRef,0.5,800)
  displayDivWhenPageLoads(businessPageButtonRef,0.3,1000)


  displayDivWhenPageLoads(businessPageButtonRefForMobileDevice,0.3,800)
  displayDivWhenPageLoads(menuIconDiv,1,1400)
})


  return (
    <div ref={nav}  className='opacity-0 relative h-[5vw] portrait:h-[15vw]  portrait:sm:h-[10vw] bg-darkgreen text-light flex items-center justify-center portrait:flex-col'>
        <div className="content w-[95%] h-full text-[1.5vw]  flex items-center justify-between">
         <div ref={logoDiv} className="logo mt-[-10vw]  portrait:mt-[-28vw]  portrait:sm:mt-[-25vw] flex items-center justify-center cursor-pointer  landscape:w-[5.5%]  portrait:w-[20%]  portrait:sm:w-[11%]"><Image alt='' src={logo}  className=' object-contain  aspect-[4/3]  landscape:w-[100vw]  portrait:w-[50vw]  portrait:sm:w-[100vw] ' /></div>  

         <Link className='landscape:hidden  flex justify-center items-center h-full text-[4vw] portrait:sm-[5.5vw] '  href={'/business-page'}> <div ref={businessPageButtonRefForMobileDevice} className=" opacity-0 business_page-btn font-M_PLUS_1 px-[20px] bg-green text-darkgreen  cursor-pointer h-4/5 rounded  transition-all ease-in duration-[0.5s] active:bg-blue hover:text-darkgreen  flex items-center justify-between ">For Business</div></Link>
       <div ref={menuIconDiv} className="opacity-0 menu  landscape:hidden  cursor-pointer flex items-center justify-end  "><Image  onClick={toogleMenuState}  className='w-[10vw] portrait:sm:w-[6vw] object-contain aspect-[4/3]' src={burgerMenu}  alt='' /></div>
       
       <div className="list-items portrait:hidden h-full w-[60%] flex items-center justify-between"><Link  href={'/AboutUs'} className='h-full'><div ref={aboutUsLinkRef}  className="opacity-0 list  px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between">About</div></Link><div ref={contactLinkRef}  className="opacity-0 list px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between">Contact</div><Link   href={'/SchoolLogin'} className='h-full'><div  ref={loginLinkRef}  className="opacity-0 list px-[1.5vw]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between">Login</div></Link><Link className='flex justify-center items-center h-full '  href={'/business-page'}> <div  ref={businessPageButtonRef} className="opacity-0  business_page-btn font-jamrul px-[20px] bg-green text-darkgreen  cursor-pointer h-4/5 rounded  transition-all ease-in duration-[0.5s] hover:bg-blue hover:text-darkgreen  flex items-center justify-between ">For Business</div></Link></div>
  
       
         

        </div>
     


        <animated.div style={menuSlideAnimation}   ref={sideBar} className={`sidebar rounded pl-[1.2%] text-[5vw] portrait:sm-[7vw]  text-grey landscape:hidden  h-[400%] portrait:sm:h-[600%] w-[50%] bg-darkgreen absolute top-[10%]  portrait:sm:top-[20%]  flex flex-col justify-around`}>
<div   className="closeicon pr-[3%] cursor-pointer flex items-center justify-end"><Image ref={icon}  onClick={toogleMenuState} className='w-[10vw] portrait:sm:w-[6vw] object-contain aspect-[4/3]' src={exitIcon}  alt='' /></div>

<div className="lists h-[80%] flex flex-col justify-between">
<Link href={'/SchoolLogin'} className='h-  full'><div className="list">Login</div></Link>
<div className="list" >Categories</div>
<Link href={'/AboutUs'} className=''><div className="list">About Us</div></Link>
<div className="list">Contact Us</div>

</div>


        </animated.div>
    </div>
  )
}
