"use client"

import { Briefcase } from "lucide-react"
import Link from "next/link"
import { Icons } from "./icons"
import { Button } from "./ui/button"
import {signIn} from "next-auth/react"
import client from "@/generated/prisma/client"

export default function AuthForm({origin='signIn'}) {
    const handleLogin = async() => {
        try {
            await signIn('google');
        } catch (error) {
            console.error("Login failed:", error);
        }
    }
    return <div className="w-full md:w-[400px] border border-gray-200 rounded-lg shadow-xl p-6  flex flex-col items-center justify-center space-y-4">
        <Briefcase size="60"/>
        <h5 className="font-bold text-xl">{ origin == 'signIn' ? 'Welcome Back...' : 'Welcome to HireMind'}</h5>
        <p>Find the best jobs around the Globe</p>
        <Button className="w-full"
            onClick={handleLogin}>
            <Icons.Google />
            {origin == 'signIn' ? 'Sign In with Google' : 'Sign Up with Google'}
        </Button>
        {   
            origin == 'signIn' ? 
            <span className="text-sm flex items-center justify-center gap-2">
                Don't have an account? <Link href="/sign-up" className="font-bold">Sign Up</Link>
            </span>
            :
            <span className="text-sm flex items-center justify-center gap-2">
                Already have an account? <Link href="/sign-in" className="font-bold">Sign In</Link>
            </span>
        }
    </div>
}