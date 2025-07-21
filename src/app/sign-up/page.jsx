import React from 'react'
import { Briefcase } from 'lucide-react'
import AuthForm from '@/components/AuthForm'

function SignUp(){
  return (
    <section className="flex items-center justify-center w-full h-screen bg-gray-50">
        <div>
          <AuthForm origin='signUp'/>
        </div>
    </section>
  )
}

export default SignUp
