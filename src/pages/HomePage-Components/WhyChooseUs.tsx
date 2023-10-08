import React, { useEffect, useRef } from 'react'
import serviceSVG from '../../../public/assets/service-svg.png'
import speakerSVG from '../../../public/assets/speaker-svg.png'
import productSVG from '../../../public/assets/product-svg.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image'



gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  
const headerTxt = useRef<HTMLDivElement>(null)
const svgDiv = useRef<HTMLDivElement>(null)
const svgDiv2 = useRef<HTMLDivElement>(null)
const writeUpDiv1 = useRef<HTMLDivElement>(null)
const writeUp1 = useRef<HTMLDivElement>(null)
const writeUpHeader1 = useRef<HTMLDivElement>(null)
const writeUpDiv2 = useRef<HTMLDivElement>(null)
const writeUp2 = useRef<HTMLDivElement>(null)
const writeUpHeader2 = useRef<HTMLDivElement>(null)
const writeUpDiv3 = useRef<HTMLDivElement>(null)
const writeUp3 = useRef<HTMLDivElement>(null)
const writeUpHeader3 = useRef<HTMLDivElement>(null)


function isPortrait() {
  const portraitQuery = window.matchMedia('(orientation: portrait)');
  return portraitQuery.matches;
}
function isLandscape() {
  const portraitQuery = window.matchMedia('(orientation: landscape)');
  return portraitQuery.matches;
}

const scrollTriggerAnimation = () =>{
  


   
   
 const animationForDivs = () =>{


  if(isLandscape()){

    let headerTextAnimation =   ScrollTrigger.create({
      trigger: headerTxt.current,
      start: "25% 80%",
      end:"bottom 20%",
      toggleActions: "restart none none none",
      onEnter: () => {
        gsap.to(headerTxt.current,1, {
          opacity: 1,
          scrub:1,
          duration:2,
        });
      },
      onLeave: () => {
        gsap.to(headerTxt.current,1, {
          opacity: 0,
          scrub:1,
          duration:2,
        });
      },
      onLeaveBack: () => {
        gsap.to(headerTxt.current,1, {
          opacity: 0,
          scrub:1,
          duration:2,
        });
      },
      onEnterBack: () => {
        gsap.to(headerTxt.current,1, {
          opacity: 1,
          scrub:1,
          duration:2,
        });
      },
    })

 let div1Animation =   ScrollTrigger.create({
      trigger: writeUpDiv1.current,
      start: "bottom 80%",
      end: "bottom 25%",
      toggleActions: "restart none none none",
      onEnter: () => {
        gsap.to(writeUpDiv1.current,1.1, {
          marginLeft:'60%',
          scrub:1,
          
        });
     setTimeout(()=>{ gsap.to(writeUpHeader1.current,1,{opacity:1,})},600)
     setTimeout(()=>{ gsap.to(writeUp1.current,1,{opacity:1,})},800)
    
      },
      onLeave: () => {
        gsap.to(writeUpDiv1.current,1, {
          marginLeft:'0%',
          scrub:1,
          
        });
    
    
        setTimeout(()=>{ gsap.to(writeUpHeader1.current,1,{opacity:0,})},100)
        setTimeout(()=>{ gsap.to(writeUp1.current,1,{opacity:0,})},200)
        
      },
      onLeaveBack: () => {
        gsap.to(writeUpDiv1.current,1, {
          marginLeft:'0%',
          scrub:1,
          
        });
    
        setTimeout(()=>{ gsap.to(writeUpHeader1.current,1,{opacity:0,})},100)
        setTimeout(()=>{ gsap.to(writeUp1.current,1,{opacity:0,})},200)
    
      },
      
      onEnterBack: () => {
        gsap.to(writeUpDiv1.current,1.2, {
          marginLeft:'60%',
          scrub:1,
         
        });
    
        setTimeout(()=>{ gsap.to(writeUpHeader1.current,1,{opacity:1,})},600)
        setTimeout(()=>{ gsap.to(writeUp1.current,1,{opacity:1,})},800)
    
      },
    })
    


    let div2Animation =   ScrollTrigger.create({
      trigger: writeUpDiv2.current,
      start: "bottom 80%",
      end: "bottom 25%",
      toggleActions: "restart none none none",
      onEnter: () => {
        gsap.to(svgDiv2.current,1.1, {
          marginLeft:'50%',
          scrub:1,
          
        });
     setTimeout(()=>{ gsap.to(writeUpHeader2.current,1,{opacity:1,})},600)
     setTimeout(()=>{ gsap.to(writeUp2.current,1,{opacity:1,})},800)
    
      },
      onLeave: () => {
        gsap.to(svgDiv2.current,1, {
          marginLeft:'0%',
          scrub:1,
          
        });
    
    
        setTimeout(()=>{ gsap.to(writeUpHeader2.current,1,{opacity:0,})},100)
        setTimeout(()=>{ gsap.to(writeUp2.current,1,{opacity:0,})},200)
        
      },
      onLeaveBack: () => {
        gsap.to(svgDiv2.current,1, {
          marginLeft:'0%',
          scrub:1,
          
        });
    
        setTimeout(()=>{ gsap.to(writeUpHeader2.current,1,{opacity:0,})},100)
        setTimeout(()=>{ gsap.to(writeUp2.current,1,{opacity:0,})},200)
    
      },
      
      onEnterBack: () => {
        gsap.to(svgDiv2.current,1.2, {
          marginLeft:'50%',
          scrub:1,
         
        });
    
        setTimeout(()=>{ gsap.to(writeUpHeader2.current,1,{opacity:1,})},600)
        setTimeout(()=>{ gsap.to(writeUp2.current,1,{opacity:1,})},800)
    
      },
    })


    let div3Animation =   ScrollTrigger.create({
      trigger: writeUpDiv3.current,
      start: "bottom 80%",
      end: "bottom 25%",
      toggleActions: "restart none none none",
      onEnter: () => {
        gsap.to(writeUpDiv3.current,1.1, {
          marginLeft:'60%',
          scrub:1,
          
        });
     setTimeout(()=>{ gsap.to(writeUpHeader3.current,1,{opacity:1,})},600)
     setTimeout(()=>{ gsap.to(writeUp3.current,1,{opacity:1,})},800)
    
      },
      onLeave: () => {
        gsap.to(writeUpDiv3.current,1, {
          marginLeft:'0%',
          scrub:1,
          
        });
    
    
        setTimeout(()=>{ gsap.to(writeUpHeader3.current,1,{opacity:0,})},100)
        setTimeout(()=>{ gsap.to(writeUp3.current,1,{opacity:0,})},200)
        
      },
      onLeaveBack: () => {
        gsap.to(writeUpDiv3.current,1, {
          marginLeft:'0%',
          scrub:1,
          
        });
    
        setTimeout(()=>{ gsap.to(writeUpHeader3.current,1,{opacity:0,})},100)
        setTimeout(()=>{ gsap.to(writeUp3.current,1,{opacity:0,})},200)
    
      },
      
      onEnterBack: () => {
        gsap.to(writeUpDiv3.current,1.2, {
          marginLeft:'60%',
          scrub:1,
         
        });
    
        setTimeout(()=>{ gsap.to(writeUpHeader3.current,1,{opacity:1,})},600)
        setTimeout(()=>{ gsap.to(writeUp3.current,1,{opacity:1,})},800)
    
      },
    })
    

   }
  
   
   if(isPortrait()){

    let headerTextAnimation =   ScrollTrigger.create({
      trigger: headerTxt.current,
      start: "top 43%",
      end:"bottom 10%",
      markers:true,
      toggleActions: "restart none none none",
      onEnter: () => {
        gsap.to(headerTxt.current,1, {
          opacity: 1,
          scrub:1,
          duration:2,
        });
      },
      onLeave: () => {
        gsap.to(headerTxt.current,1, {
          opacity: 0,
          scrub:1,
          duration:2,
        });
      },
      onLeaveBack: () => {
        gsap.to(headerTxt.current,1, {
          opacity: 0,
          scrub:1,
          duration:2,
        });
      },
      onEnterBack: () => {
        gsap.to(headerTxt.current,1, {
          opacity: 1,
          scrub:1,
          duration:2,
        });
      },
    })

    let div1Animation =    ScrollTrigger.create({
      
      trigger: writeUpDiv1.current,
      start: "top 20%",
      end: "bottom 10%",
      toggleActions: "restart none none none",
      onEnter: () => {
        gsap.to(writeUpDiv1.current,1, {
          opacity:1,
          scrub:1,
          
        });
     setTimeout(()=>{ gsap.to(writeUpHeader1.current,1,{opacity:1,})},300)
     setTimeout(()=>{ gsap.to(writeUp1.current,1,{opacity:1,})},500)
    
      },
      onLeave: () => {
        gsap.to(writeUpDiv1.current,1, {
          opacity:0,
          scrub:1,
          
        });
    
    
        setTimeout(()=>{ gsap.to(writeUpHeader1.current,1,{opacity:0,})},100)
        setTimeout(()=>{ gsap.to(writeUp1.current,1,{opacity:0,})},200)
        
      },
      onLeaveBack: () => {
        gsap.to(writeUpDiv1.current,1, {
          opacity:0,
          scrub:1,
          
        });
    
        setTimeout(()=>{ gsap.to(writeUpHeader1.current,1,{opacity:0,})},100)
        setTimeout(()=>{ gsap.to(writeUp1.current,1,{opacity:0,})},200)
    
      },
      onEnterBack: () => {
        gsap.to(writeUpDiv1.current,1, {
          opacity:1,
          scrub:1,
         
        });
    
        setTimeout(()=>{ gsap.to(writeUpHeader1.current,1,{opacity:1,})},300)
        setTimeout(()=>{ gsap.to(writeUp1.current,1,{opacity:1,})},500)
    
      },
    })
    
    let div2Animation =   ScrollTrigger.create({
      
      trigger: writeUpDiv2.current,
      start: "top 20%",
      end: "bottom 10%",
      toggleActions: "restart none none none",
      onEnter: () => {
        gsap.to(writeUpDiv2.current,1, {
          opacity:1,
          scrub:1,
          
        });
     setTimeout(()=>{ gsap.to(writeUpHeader2.current,1,{opacity:1,})},300)
     setTimeout(()=>{ gsap.to(writeUp2.current,1,{opacity:1,})},500)
    
      },
      onLeave: () => {
        gsap.to(writeUpDiv2.current,1, {
          opacity:0,
          scrub:1,
          
        });
    
    
        setTimeout(()=>{ gsap.to(writeUpHeader2.current,1,{opacity:0,})},100)
        setTimeout(()=>{ gsap.to(writeUp2.current,1,{opacity:0,})},200)
        
      },
      onLeaveBack: () => {
        gsap.to(writeUpDiv2.current,1, {
          opacity:0,
          scrub:1,
          
        });
    
        setTimeout(()=>{ gsap.to(writeUpHeader2.current,1,{opacity:0,})},100)
        setTimeout(()=>{ gsap.to(writeUp2.current,1,{opacity:0,})},200)
    
      },
      onEnterBack: () => {
        gsap.to(writeUpDiv2.current,1, {
          opacity:1,
          scrub:1,
         
        });
    
        setTimeout(()=>{ gsap.to(writeUpHeader2.current,1,{opacity:1,})},300)
        setTimeout(()=>{ gsap.to(writeUp2.current,1,{opacity:1,})},500)
    
      },
    })
    
    let div3Animation =   ScrollTrigger.create({
      
      trigger: writeUpDiv3.current,
      start: "top 20%",
      end: "bottom 10%",
      toggleActions: "restart none none none",
      onEnter: () => {
        gsap.to(writeUpDiv3.current,1, {
          opacity:1,
          scrub:1,
          
        });
     setTimeout(()=>{ gsap.to(writeUpHeader3.current,1,{opacity:1,})},300)
     setTimeout(()=>{ gsap.to(writeUp3.current,1,{opacity:1,})},500)
    
      },
      onLeave: () => {
        gsap.to(writeUpDiv3.current,1, {
          opacity:0,
          scrub:1,
          
        });
    
    
        setTimeout(()=>{ gsap.to(writeUpHeader3.current,1,{opacity:0,})},100)
        setTimeout(()=>{ gsap.to(writeUp3.current,1,{opacity:0,})},200)
        
      },
      onLeaveBack: () => {
        gsap.to(writeUpDiv3.current,1, {
          opacity:0,
          scrub:1,
          
        });
    
        setTimeout(()=>{ gsap.to(writeUpHeader3.current,1,{opacity:0,})},100)
        setTimeout(()=>{ gsap.to(writeUp3.current,1,{opacity:0,})},200)
    
      },
      onEnterBack: () => {
        gsap.to(writeUpDiv3.current,1, {
          opacity:1,
          scrub:1,
         
        });
    
        setTimeout(()=>{ gsap.to(writeUpHeader3.current,1,{opacity:1,})},300)
        setTimeout(()=>{ gsap.to(writeUp3.current,1,{opacity:1,})},500)
    
      },
    })
    
   }  

 }
  animationForDivs() 
   
   
   
   
   
   
   
   
   
 

}
let renderScrollTriggerAnimation = useEffect(()=>{scrollTriggerAnimation()})
















  return (
    <div className='w-[100vw] landscape:h-[130vw] portrait:h-[350vw] portrait:sm:h-[235vw] bg-grey flex item-center justify-center pt-[6vw]  portrait:pt-[30vw] portrait:sm:pt-[20vw] '>
      <div className="content flex-col justify-between align-center h-full w-[95%]  ">
<div ref={headerTxt}  className="header opacity-0 text-[2.5vw]  portrait:text-[7vw]  portrait:sm:text-[5vw] text-center mb-[13%] portrait:mb-[30%]">WHY CHOOSE SCHOOL SUPPORT MARKET PLACE</div>

 

<div className="section1 flex items-center justify-between mb-[20%] portrait:mb-[25%]">
<div ref={svgDiv} className="svg  absolute portrait:hidden ">
<Image alt='' src={speakerSVG}  className='w-[45vw] object-contain aspect-[4/3]  landscape:object-left ' />
</div>


<div ref={writeUpDiv1} className="writeup1-div w-[40%] portrait:w-[100%] portrait:opacity-0 bg-pink rounded p-[3%] portrait:p-[7%] border-2 border-darkgreen">
<div ref={writeUpHeader1} className="writeup1-header opacity-0  text-[2vw]  portrait:text-[6vw]  portrait:sm:text-[4vw]  portrait:text-center  mb-[4%]">We Speak for Businesses</div>

<div ref={writeUp1} className="writeup1  opacity-0 font-thin text-[1.5vw]  portrait:text-[5vw]  portrait:sm:text-[3vw] portrait:text-center  font-M_PLUS_1">
Our market place is a review platform
that’s open to everyone. Share
your experiences to help others
make better choices and
encourage companies to up
their game.

</div>


</div>


</div>





<div className="section2 flex items-center justify-between mb-[20%]  portrait:mb-[25%]">



<div ref={writeUpDiv2} className="writeup1-div w-[40%]  portrait:w-[100%] portrait:opacity-0 bg-blue rounded p-[3%] portrait:p-[7%] border-2 border-darkgreen">
<div  ref={writeUpHeader2} className="writeup1-header text-[2.5vw] opacity-0 portrait:text-[7vw]  portrait:sm:text-[5vw] portrait:text-center  mb-[4%]">We Offer Service Review</div>

<div ref={writeUp2} className="writeup1 font-thin text-[1.5vw] opacity-0 portrait:text-[5vw]  portrait:sm:text-[3vw]  portrait:text-center font-M_PLUS_1">
Our market place is a review platform
that’s open to everyone. Share
your experiences to help others
make better choices and
encourage companies to up
their game.

</div>


</div>




<div ref={svgDiv2} className="svg  portrait:hidden absolute">
<Image alt='' src={serviceSVG}  className='w-[45vw] object-contain aspect-[4/3]  landscape:object-right ' />
</div>

</div>




<div className="section3 flex items-center justify-between ">

<div className="svg  portrait:hidden absolute ">
<Image alt='' src={productSVG}  className='w-[45vw] object-contain aspect-[4/3]  landscape:object-left ' />
</div>

<div ref={writeUpDiv3}   className="writeup1-div w-[40%]  portrait:w-[100%] portrait:opacity-0 bg-green rounded p-[3%] portrait:p-[7%] border-2 border-darkgreen">
<div ref={writeUpHeader3} className="writeup1-header text-[170%] portrait:text-center opacity-0 portrait:text-[140%] mb-[4%]">We Offer Product Review</div>

<div ref={writeUp3} className="writeup1 font-thin text-[1.5vw]  portrait:text-[5vw] opacity-0 portrait:sm:text-[3vw]  portrait:text-center font-M_PLUS_1">
Our market place is a review platform
that’s open to everyone. Share
your experiences to help others
make better choices and
encourage companies to up
their game.

</div>


</div>






</div>










      </div>
    </div>
  )
}
