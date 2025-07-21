import React from 'react'
import { Briefcase } from 'lucide-react'
import AuthForm from '@/components/AuthForm'

function SignIn(){
  return (
    <section className="flex items-center justify-center w-full h-screen bg-gray-50">
        <div>
            <AuthForm origin='signIn' />
        </div>
    </section>
  )
}

export default SignIn
