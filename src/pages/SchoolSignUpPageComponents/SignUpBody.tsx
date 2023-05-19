import React from 'react'
import { useState,useRef,useEffect } from 'react'
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

          const axiosInstance = axios.create({
            baseURL: 'https://market-place-api.vercel.app',
            withCredentials: true,
          });

          const apiRes = await axiosInstance.post('/api/auth/signup', data);

          // const apiRes = await axios.post("https://market-place-api.vercel.app/api/auth/signup", data)

          if (apiRes?.data?.success) {
              // save data in session using next auth

              alert('data was sent')


              // const loginRes = await loginUser({
              //     email: data.email,
              //     password: data.password
              // })

              // if (loginRes && !loginRes.ok) {
              //     setSubmitError(loginRes.error || "")
              // }
              // else {
              //     Router.push("/")
              // }
          }
      } catch (error: unknown) {
          if (error instanceof AxiosError) {
              const errorMsg = error.response?.data?.error
              setSubmitError(errorMsg)
              console.log(error.response?.data?.error)
          }
      }

      setLoading(false)
  }
}

const firstName = useRef<HTMLInputElement>(null)
const lastName = useRef<HTMLInputElement>(null)
let limit = 2

const confirmPassword = useRef<HTMLInputElement>(null) 


const alertUserThatTheirInputedNameIsTooShort = () => {
  const firstNameInput = firstName.current?.value;
  const lastNameInput = lastName.current?.value;

  if (firstNameInput && firstNameInput.length < limit) {
    alert('First name must be at least 2 characters long');
  }

  if (lastNameInput && lastNameInput.length < limit) {
    alert('Last name must be at least 2 characters long');
  }
};

const checkIfPasswordAndConfirmPasswordMatches = () => {
  const passwordInpute = passwordInput.current?.value;
  const confirmPasswordInput = lastName.current?.value;

  if (passwordInpute !== confirmPasswordInput) {
    alert('your password does not match with the value inputed for confirm password');
  }

};

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement   | HTMLSelectElement>) => {

  setData({ ...data, [event.target.name]: event.target.value })
}



    const validateData = (): boolean => {
        const err = []

        checkIfPasswordAndConfirmPasswordMatches()
        alertUserThatTheirInputedNameIsTooShort()

        if (data.firstName?.length < 1) {
            err.push({ firstName: "First name must be atleast 1 characters long" })
            alert('names must be atleast two letters long')
           
        }
        else if (data.firstName?.length > 30) {
            err.push({ firstName: "First name should be less than 30 characters" })
        }

        if (data.lastName?.length < 1) {
          err.push({ lastName: "Last name must be atleast 4 characters long" })
          alert('names must be atleast two letters long')
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


const passwordInput = useRef<HTMLInputElement>(null)
const passwordStrengthText = useRef<HTMLSpanElement>(null)  




    function checkPasswordValidity(password: string): boolean {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*'?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    }
    
    function checkPasswordInterval(passwordInput: HTMLInputElement): void {
      let timeoutId: ReturnType<typeof setTimeout> | undefined;
    
      const checkValidity = (): void => {
        const password = passwordInput.value;
        const isValid = checkPasswordValidity(password);

        
    
       if (isValid) {
        passwordInput.style.border = '2px solid green' 
        if(passwordStrengthText.current){
          passwordStrengthText.current.style.display = 'none'  
      passwordStrengthText.current.style.position = 'absolute'
      }
        

        } else {
          if(passwordInput.value){
          passwordInput.style.border = '2px solid pink'

          if(passwordStrengthText.current){
              passwordStrengthText.current.style.display = 'block'  
          passwordStrengthText.current.style.position = 'relative'
          }
        
          }
        else  if(!passwordInput.value){
          passwordInput.style.border = 'none'  


          if(passwordStrengthText.current){
            passwordStrengthText.current.style.display = 'none'  
        passwordStrengthText.current.style.position = 'absolute'
        }
          
          }
         }
     
        timeoutId = setTimeout(checkValidity, 600);
      };
    
      passwordInput.addEventListener('input', () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(checkValidity, 600);
      });
    
      // Start the initial timeout check
      timeoutId = setTimeout(checkValidity, 600);
    }
    

 

    useEffect(()=>{
    
      if (passwordInput.current) {
        checkPasswordInterval(passwordInput.current);
      }

    })




  return (
    <div className='bg-grey text-darkgreen landscape:h-screen  w-full pt-[5%] portrait:pt-[10%]  flex justify-center'>
      <div className="content  portrait:h-full landscape:flex landscape:justify-between  portrait:flex-col portrait:items-end w-[95%]">
  <div className="section1 w-[45%] ">
            <Image alt='' src={headerIMG} className='   object-contain aspect-[4/3] portrait:hidden'/>
        </div>
        <div className="section2  overflow-y-auto scrollbar-hide  landscape:w-[50%] bg-green bg-opacity-25 landscape:h-[90%]    rounded pt-[3%] pb-[5%] ">

          <form action="" onSubmit={handleSignup} >


          
                <div className="content    flex flex-col items-center">
                               <div className="header mb-[8%] w-full flex justify-center items-center text-center  text-[2.5vw]  portrait:text-[7vw]  portrait:sm:text-[5vw]">
  <span>MAKE REVIEWS AND DISCOVER COMPANIES</span>
</div>    

<div className="w-full pb-[15%] BTN text-[1.5vw] portrait:text-[4.4vw]  portrait:sm:text-[4vw] flex justify-center items-center">
     <span className='w-[60%] portrait:w-[70%] portrait:sm:w-[60%]  transition-all ease-in duration-[0.5s] bg-lightgreen hover:bg-blue hover:text-armygreen   px-[2vw] py-[0.5vw] text-grey rounded cursor-pointer flex justify-between items-center'><span className=''><Image alt='' src={googleIcon} className=' object-contain  aspect-[4/3]  landscape:w-[5vw]  portrait:w-[15vw]  portrait:sm:w-[10vw]'/></span>  <span>SIGN IN WITH GOOGLE</span> </span>
</div>


<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<label htmlFor='companyName' className='self-start mb-2'>COMPANY NAME</label>
<input title='companyName' required type="text"  onChange={handleInputChange}  value={data.companyName}     name="companyName" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>

<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<label htmlFor='firstName'  className='self-start mb-2'>FIRST NAME</label>
<input ref={firstName} title='firstName' required type="text"  onChange={handleInputChange}    value={data.firstName}  name="firstName" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>
<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<label htmlFor='lastName' className='self-start mb-2'>LAST NAME</label>
<input ref={lastName} title='lastName' required type="text"  onChange={handleInputChange}    value={data.lastName}   name="lastName" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>
<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<label className='self-start mb-2'>JOB TITLE</label>
<input title='jobTitle' required type="text"  onChange={handleInputChange}   value={data.jobTitle}  name="jobTitle" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>

<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<label className='self-start mb-2'>INDUSTRY</label>
<select title='industry' required name="industry"  onChange={handleInputChange} value={data.industry} id="">
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
<label htmlFor='email' className='self-start mb-2'>EMAIL</label>
<input title='email' required  type="email"  onChange={handleInputChange}  value={data.email}  name="email" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>

<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<label htmlFor='password' className='self-start mb-2'>PASSWORD</label>
<input ref={passwordInput} title='password' required  type="text"  onChange={handleInputChange}   value={data.password}  name="password"  id="passwordInput" className='ease-in-out duration-400 outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>
<span className={'hidden self-start  text-[1.1vw] portrait:text-[3.6vw]  portrait:sm:text-[2.1vw]'}  ref={passwordStrengthText}>password is too weak , please make sure your password includes a mix of uppercase,lowercase and special characters.</span>
</div>


<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[7vw] portrait:mb-[12vw]">
<label htmlFor='confirmPassword' className='self-start mb-2'>CONFIRM PASSWORD</label>
<input  ref={confirmPassword} title='confirmPassword'  required  type="text"  onChange={handleInputChange}  value={data.confirmPassword}   name="confirmPassword" id="" className='border-none outline-none rounded h-[3vw] portrait:h-[10vw] w-[100%] px-2 portrait:sm:px-[2vw]'/>

</div>

<button  title={"Sign up"} type="submit"  className='w-full'>
<div className="w-full  BTN text-[1.5vw] portrait:text-[4.4vw]  portrait:sm:text-[4vw] flex justify-center items-center mb-4">
     <span className='w-[60%] h-[4vw]   portrait:h-[10vw] portrait:w-[70%] portrait:sm:w-[60%]  transition-all ease-in duration-[0.5s] bg-lightgreen hover:bg-blue hover:text-armygreen   px-[2vw] py-[0.5vw] text-grey rounded cursor-pointer flex justify-center items-center'> <span>CREATE FREE ACCOUNT</span> </span>
</div>
</button>
<div className="input-div flex flex-col justify-between items-center w-[70%] portrait:w-[90%]   portrait:sm:w-[90%] portrait:sm:text-[3.5vw] mb-[3vw] portrait:mb-[7vw]">
<Link href={'/SchoolLogin'}><span className='self-start mb-2 underline'>already have an account ? Login</span> </Link> 
</div>




                </div>
                </form>
        </div>

      </div>
      
        
  
    </div>
  )
}

