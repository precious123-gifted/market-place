import React from 'react'
import Image from 'next/image'
import headerIMG from '../../../public/assets/header-img.png'
import googleIcon from '../../../public/assets/google-icon.png'

export default function SignUpBody() {
  return (
    <div className='bg-grey text-darkgreen h-screen portrait:h-[200vw] w-full pt-[5%] portrait:pt-[10%]  flex justify-center'>
      <div className="content  landscape:flex landscape:justify-between  portrait:flex-col portrait:items-end w-[95%]">
  <div className="section1 w-[45%] ">
            <Image alt='' src={headerIMG} className='   object-contain aspect-[4/3] portrait:hidden'/>
        </div>
        <div className="section2  overflow-y-auto scrollbar-hide  landscape:w-[50%] bg-green bg-opacity-25 h-[90%] rounded pt-[3%] ">
                <div className="content h-[200vw] flex flex-col items-center">
                               <div className="header mb-[8%] w-full flex justify-center items-center text-center  text-[2.5vw]  portrait:text-[7vw]  portrait:sm:text-[5vw]">
  <span>MAKE REVIEWS AND DISCOVER COMPANIES</span>
</div>    

<div className="w-full pb-[15%] BTN text-[1.5vw] portrait:text-[4.4vw]  portrait:sm:text-[4vw] flex justify-center items-center">
     <span className='w-[60%] portrait:w-[70%] portrait:sm:w-[60%]  transition-all ease-in duration-[0.5s] bg-lightgreen hover:bg-blue hover:text-armygreen   px-[2vw] py-[0.5vw] text-grey rounded cursor-pointer flex justify-between items-center'><span className=''><Image alt='' src={googleIcon} className=' object-contain  aspect-[4/3]  landscape:w-[5vw]  portrait:w-[15vw]  portrait:sm:w-[10vw]'/></span>  <span>SIGN IN WITH GOOGLE</span> </span>
</div>


<div className="input-div flex flex-col justify-between items-center">
<span>SIGN IN WITH YOUR EMAIL</span>
<input type="email" name="school-mail" id="" className='border-none outline-none rounded h-[3vw]'/>

</div>

                </div>
     
        </div>

      </div>
      
        
  
    </div>
  )
}
