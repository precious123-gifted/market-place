import React, { ChangeEvent ,MouseEvent} from 'react'
import Link from 'next/link'
import { Style } from 'util'
import {signal} from '@preact/signals-react'
import { useRef } from 'react'
import logo from '../../../public/assets/trustmonialog.png'
import burgerMenu from '../../../public/assets/MenuNavigation.png'
import exitIcon from '../../../public/assets/exiticon.png'
import Image from 'next/image'
import { useEffect } from 'react'



export default function NavigationBar() {

const nav = useRef<HTMLDivElement>(null)

const Open = signal(true)


const handleClick = (event:MouseEvent) =>{


}
const sayHi = (name : string) =>{
alert(`hello ${name}`)
}

useEffect(()=>{
  
  // nav?.current?.focus();


  
 
})


  return (
    <div ref={nav}  className='h-[5vw] portrait:h-[15vw]  portrait:sm:h-[10vw] bg-darkgreen text-light flex items-center justify-center portrait:flex-col'>
        <div className="content w-[95%] h-full text-[1.5vw]  flex items-center justify-between">
         <div className="logo  flex items-center justify-center cursor-pointer  landscape:w-[5.5%]  portrait:w-[20%]  portrait:sm:w-[11%]"><Image alt='' src={logo}  className=' object-contain  aspect-[4/3]  landscape:w-[100vw]  portrait:w-[50vw]  portrait:sm:w-[100vw] ' /></div>  

         <Link className='landscape:hidden  flex justify-center items-center h-full text-[4vw] portrait:sm-[5.5vw] '  href={'/'}> <div className="business_page-btn font-M_PLUS_1 px-[20px] bg-blue text-darkgreen  cursor-pointer h-4/5 rounded  transition-all ease-in duration-[0.5s] active:bg-green hover:text-darkgreen  flex items-center justify-between ">For Customers</div></Link>
       <div className="menu  landscape:hidden  cursor-pointer flex items-center justify-end  "><Image  className='w-[10vw] portrait:sm:w-[6vw] object-contain aspect-[4/3]' src={burgerMenu}  alt='' /></div>

       <div className="list-items portrait:hidden h-full w-[60%] flex items-center justify-between"><div className="list  px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-blue hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between">About</div><div className="list px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-blue hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between">Contact</div><div className="list px-[1.5vw]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-blue hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between">Login</div><Link className='flex justify-center items-center h-full '  href={'/'}> <div className="business_page-btn font-jamrul px-[20px] bg-blue text-darkgreen  cursor-pointer h-4/5 rounded  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  flex items-center justify-between ">For Schools</div></Link></div>

         

        </div>

        <div className="sidebar rounded pl-[1.2%] text-[5vw] portrait:sm-[7vw]  text-grey landscape:hidden  h-[30%] portrait:sm:h-[80%] w-[50%] bg-darkgreen absolute top-[0%] left-[51%] flex flex-col justify-around">
<div   className="closeicon pr-[3%] cursor-pointer flex items-center justify-end"><Image onClick={handleClick} className='w-[10vw] portrait:sm:w-[6vw] object-contain aspect-[4/3]' src={exitIcon}  alt='' /></div>

<div className="lists h-[80%] flex flex-col justify-between">
<div className="list" onClick={()=>{sayHi('precious')}}>Login</div>
<div className="list">Categories</div>
<div className="list">About Trustmonia</div>
<div className="list">Contact Trustmonia</div>

</div>


        </div>
     
    </div>
  )
}
