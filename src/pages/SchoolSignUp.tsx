import React from 'react'
import NavigationBar from './SchoolSignUpPageComponents/NavigationBar'
import SignUpBody from './SchoolSignUpPageComponents/SignUpBody'

export default function SchoolSignUpPage() {
  return (
    <div className='scrollbar-hide'>
      <NavigationBar/>
      <SignUpBody/>
    </div>
  )
}
