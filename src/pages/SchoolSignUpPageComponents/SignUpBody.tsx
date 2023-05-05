import React from 'react'
import Image from 'next/image'
import headerIMG from '../../../public/assets/header-img.png'
import googleIcon from '../../../public/assets/google-icon.png'
import Link from 'next/link'

export default function SignUpBody() {
  return (
    <div className='bg-grey text-darkgreen h-screen portrait:h-[250vw] w-full pt-[5%] portrait:pt-[10%]  flex justify-center'>
      <div className="content  portrait:h-full landscape:flex landscape:justify-between  portrait:flex-col portrait:items-end w-[95%]">
  <div className="section1 w-[45%] ">
            <Image alt='' src={headerIMG} className='   object-contain aspect-[4/3] portrait:hidden'/>
        </div>
        <div className="section2  overflow-y-auto scrollbar-hide  landscape:w-[50%] bg-green bg-opacity-25 h-[90%]  rounded pt-[3%] ">
                <div className="content h-[60vw]   flex flex-col items-center">
                               <div className="header mb-[8%] w-full flex justify-center items-center text-center  text-[2.5vw]  portrait:text-[7vw]  portrait:sm:text-[5vw]">
  <span>MAKE REVIEWS AND DISCOVER COMPANIES</span>
</div>    

<div className="w-full pb-[15%] BTN text-[1.5vw] portrait:text-[4.4vw]  portrait:sm:text-[4vw] flex justify-center items-center">
     <span className='w-[60%] portrait:w-[70%] portrait:sm:w-[60%]  transition-all ease-in duration-[0.5s] bg-lightgreen hover:bg-blue hover:text-armygreen   px-[2vw] py-[0.5vw] text-grey rounded cursor-pointer flex justify-between items-center'><span className=''><Image alt='' src={googleIcon} className=' object-contain  aspect-[4/3]  landscape:w-[5vw]  portrait:w-[15vw]  portrait:sm:w-[10vw]'/></span>  <span>SIGN IN WITH GOOGLE</span> </span>
</div>


<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<span className='self-start mb-2'>COMPANY NAME</span>
<input type="text" name="business-name" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>

<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<span className='self-start mb-2'>FIRST NAME</span>
<input type="text" name="first-name" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>
<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<span className='self-start mb-2'>LAST NAME</span>
<input type="text" name="first-name" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>
<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<span className='self-start mb-2'>JOB TITLE</span>
<input type="text" name="job-title" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>
<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[7vw] portrait:mb-[12vw]">
<span className='self-start mb-2'>EMAIL</span>
<input type="email" name="job-title" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>

<div className="w-full  BTN text-[1.5vw] portrait:text-[4.4vw]  portrait:sm:text-[4vw] flex justify-center items-center mb-4">
     <span className='w-[60%] h-[4vw]   portrait:h-[10vw] portrait:w-[70%] portrait:sm:w-[60%]  transition-all ease-in duration-[0.5s] bg-lightgreen hover:bg-blue hover:text-armygreen   px-[2vw] py-[0.5vw] text-grey rounded cursor-pointer flex justify-center items-center'> <span>CREATE FREE ACCOUNT</span> </span>
</div>
<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<Link href={'/SchoolLogin'}><span className='self-start mb-2'>already have an account ? Login</span> </Link> 
</div>




                </div>
     
        </div>

      </div>
      
        
  
    </div>
  )
}

