import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import headerIMG from '../../../public/assets/header-img.png'
import googleIcon from '../../../public/assets/google-icon.png'
import Link from 'next/link'
import axios, { AxiosError } from 'axios'
import { InputErros } from '../../../types/error'
import { loginUser } from '@/helpers'
import Router from 'next/router'

export default function SignUpBody() {


  const [validationErrors, setValidationErrors] = useState<InputErros[]>([])
  const [submitError, setSubmitError] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState({
    companyName : "",
  firstName : "",
  lastName : "",
  jobTitle : "",
  industry : "",
  email : "",
  password: "",
  confirmPassword : ""
})


 
const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const isValid = validateData()

  if (isValid) {
      // sign up

      try {
          setLoading(true)
          const apiRes = await axios.post("https://market-place-tavy-git-master-precious123-gifted.vercel.app/api/auth/signup", data)

          if (apiRes?.data?.success) {
              // save data in session using next auth

              const loginRes = await loginUser({
                  email: data.email,
                  password: data.password
              })

              if (loginRes && !loginRes.ok) {
                  setSubmitError(loginRes.error || "")
              }
              else {
                  Router.push("/")
              }
          }
      } catch (error: unknown) {
          if (error instanceof AxiosError) {
              const errorMsg = error.response?.data?.error
              setSubmitError(errorMsg)
          }
      }

      setLoading(false)
  }
}



const handleInputChange = (event: React.ChangeEvent<HTMLInputElement   | HTMLSelectElement>) => {

  setData({ ...data, [event.target.name]: event.target.value })
}



    const validateData = (): boolean => {
        const err = []

        if (data.firstName?.length < 1) {
            err.push({ firstName: "First name must be atleast 4 characters long" })
        }
        else if (data.firstName?.length > 30) {
            err.push({ firstName: "First name should be less than 30 characters" })
        }

        if (data.lastName?.length < 1) {
          err.push({ lastName: "Last name must be atleast 4 characters long" })
      }
      else if (data.lastName?.length > 30) {
          err.push({ fullName: "Last name should be less than 30 characters" })
      }


        else if (data.password?.length < 6) {
            err.push({ password: "Password should be atleast 6 characters long" })
        }
        else if (data.password !== data.confirmPassword) {
            err.push({ confirmPassword: "Passwords don't match" })
        }

        setValidationErrors(err)

        if (err.length > 0) {
            return false
        }
        else {
            return true
        }
    }




  return (
    <div className='bg-grey text-darkgreen h-screen portrait:h-[250vw] w-full pt-[5%] portrait:pt-[10%]  flex justify-center'>
      <div className="content  portrait:h-full landscape:flex landscape:justify-between  portrait:flex-col portrait:items-end w-[95%]">
  <div className="section1 w-[45%] ">
            <Image alt='' src={headerIMG} className='   object-contain aspect-[4/3] portrait:hidden'/>
        </div>
        <div className="section2  overflow-y-auto scrollbar-hide  landscape:w-[50%] bg-green bg-opacity-25 h-[90%]  rounded pt-[3%] pb-[5%] ">

          <form action="" onSubmit={handleSignup} >


          
                <div className="content    flex flex-col items-center">
                               <div className="header mb-[8%] w-full flex justify-center items-center text-center  text-[2.5vw]  portrait:text-[7vw]  portrait:sm:text-[5vw]">
  <span>MAKE REVIEWS AND DISCOVER COMPANIES</span>
</div>    

<div className="w-full pb-[15%] BTN text-[1.5vw] portrait:text-[4.4vw]  portrait:sm:text-[4vw] flex justify-center items-center">
     <span className='w-[60%] portrait:w-[70%] portrait:sm:w-[60%]  transition-all ease-in duration-[0.5s] bg-lightgreen hover:bg-blue hover:text-armygreen   px-[2vw] py-[0.5vw] text-grey rounded cursor-pointer flex justify-between items-center'><span className=''><Image alt='' src={googleIcon} className=' object-contain  aspect-[4/3]  landscape:w-[5vw]  portrait:w-[15vw]  portrait:sm:w-[10vw]'/></span>  <span>SIGN IN WITH GOOGLE</span> </span>
</div>


<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<span className='self-start mb-2'>COMPANY NAME</span>
<input  required type="text"  onChange={handleInputChange}  value={data.companyName}     name="companyName" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>

<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<span className='self-start mb-2'>FIRST NAME</span>
<input required type="text"  onChange={handleInputChange}    value={data.firstName}  name="firstName" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>
<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<span className='self-start mb-2'>LAST NAME</span>
<input  required type="text"  onChange={handleInputChange}    value={data.lastName}   name="lastName" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>
<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<span className='self-start mb-2'>JOB TITLE</span>
<input  required type="text"  onChange={handleInputChange}   value={data.jobTitle}  name="jobTitle" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>

<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<span className='self-start mb-2'>INDUSTRY</span>
<select  required name="industry"  onChange={handleInputChange} value={data.industry} id="">
<option value="">-- Select an option --</option>
  <option value="edtech">Education Technology (EdTech) Industry</option>
  <option value="school-supplies">School Supplies Industry</option>
  <option value="food-catering">Food and Catering Industry</option>
  <option value="security">Security Industry</option>
  <option value="transportation">Transportation Industry</option>
  <option value="cleaning-maintenance">Cleaning and Maintenance Industry</option>
  <option value="publishing-printing">Publishing and Printing Industry</option>
  <option value="consulting-training">Consulting and Training Industry</option>

</select>

</div>

<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<span className='self-start mb-2'>EMAIL</span>
<input  required  type="email"  onChange={handleInputChange}  value={data.email}  name="email" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>

<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[7vw] portrait:mb-[12vw]">
<span className='self-start mb-2'>PASSWORD</span>
<input  required  type="text"  onChange={handleInputChange}  value={data.password}  name="password" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>


<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[7vw] portrait:mb-[12vw]">
<span className='self-start mb-2'>CONFIRM PASSWORD</span>
<input  required  type="text"  onChange={handleInputChange}  value={data.confirmPassword}   name="confirmPassword" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>

<button  title={"Sign up"} type="submit"  className='w-full'>
<div className="w-full  BTN text-[1.5vw] portrait:text-[4.4vw]  portrait:sm:text-[4vw] flex justify-center items-center mb-4">
     <span className='w-[60%] h-[4vw]   portrait:h-[10vw] portrait:w-[70%] portrait:sm:w-[60%]  transition-all ease-in duration-[0.5s] bg-lightgreen hover:bg-blue hover:text-armygreen   px-[2vw] py-[0.5vw] text-grey rounded cursor-pointer flex justify-center items-center'> <span>CREATE FREE ACCOUNT</span> </span>
</div>
</button>
<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<Link href={'/SchoolLogin'}><span className='self-start mb-2'>already have an account ? Login</span> </Link> 
</div>




                </div>
                </form>
        </div>

      </div>
      
        
  
    </div>
  )
}

