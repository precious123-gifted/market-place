import React, { useEffect, useRef } from 'react'
import { RefObject } from 'react'
import headerIMG from '../../../public/assets/header-img.png'
import Image from 'next/image'
import Link from 'next/link'
import displayDivWhenPageLoads from '../../../public/utilities/animation';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);


export default function Header() {



  const headerTXT : RefObject<HTMLDivElement> = useRef(null)
    const headerSVG = useRef<HTMLImageElement>(null)
    const headerBTN1 = useRef<HTMLSpanElement>(null)
    const headerBTN2 = useRef<HTMLSpanElement>(null)



//     const timeline = gsap.timeline();
//     timeline.from(headerTXT, { opacity: 0, y: 100, duration: 1 });

    

//  ScrollTrigger.create({
//       trigger: headerTXT.current,
//       start: "top center",
//       end: "bottom center",
//       animation: timeline,
//       scrub: true,
//     });
    



  

   



    let renderAnimation = useEffect(()=>{
      displayDivWhenPageLoads(headerTXT,0.5,1900)
      displayDivWhenPageLoads(headerSVG,1,2200)
      displayDivWhenPageLoads(headerBTN1,0.3,2600)
      displayDivWhenPageLoads(headerBTN2,0.3,2600)
    })


  return (
    <div className='landscape:h-[50vw]  w-[100vw] bg-grey flex items-start justify-center'>

        <div className="content  w-[95%] pt-[5%] h-full portrait:flex-col landscape:flex landscape:items-start landscape:justify-between">
<div className="section1 portrait:mb-[10%] font-meduim font-M_PLUS_1 landscape:w-[40%] landscape:flex-col landscape:justify-between">
<div ref={headerTXT} className="headerTXT  opacity-0  portrait:text-[6vw] portrait:sm:text-[6vw]  text-darkgreen  landscape:text-[3vw] landscape:h-[70%]  landscape:mb-[9%]"><span>CONNECTING PEOPLE
WITH SCHOOLS 
THEY CAN TRUST AND SCHOOLS WITH RELIABLE SERVICE PROVIDERS</span> </div>




<Link href={'/SchoolLogin'}>
<div className="BTN text-[2vw] portrait:hidden">
    <span ref={headerBTN1} className=' opacity-0 transition-all ease-in duration-[0.5s] bg-armygreen hover:bg-blue hover:text-armygreen p-[1vw] text-grey rounded cursor-pointer'>Business Review</span>
</div></Link>

</div>

<div className="section2   lanscape:w-[40%]  landscape:flex landscape:items-start landscape:justify-end ">
<Image ref={headerSVG} alt='' src={headerIMG}   className='w-[50vw] opacity-0  mr-[-10vw]   object-contain aspect-[4/3] landscape:object-right portrait:mb-[17%]  portrait:w-[100vw] ' />


<Link href={'/SchoolLogin'}><div className="BTN   portrait:text-[7vw]  portrait:sm:text-[4vw] landscape:hidden flex item-center justify-center">
    <span  ref={headerBTN2} className='  opacity-0 transition-all ease-in duration-[0.5s] bg-armygreen hover:bg-blue hover:text-armygreen  portrait:p-[3.5vw] portrait:sm:p-[1.5vw] text-grey rounded cursor-pointer'>Company Review</span>
</div> </Link>


</div>

        </div>
      
    </div>
  )
}
