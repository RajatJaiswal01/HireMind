import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {Prisma} from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export const authOptions = {
    adapter: PrismaAdapter(Prisma),
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/sign-in",
    },     
    providers: [  
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                const dbUser = await Prisma.user.findUnique({
                    where: { email: user.email },
                    select: { id: true, name: true, email: true, image: true, role: true }
                });

                if (dbUser) {
                    token.id = dbUser.id;
                    token.name = dbUser.name;
                    token.email = dbUser.email;
                    token.image = dbUser.image;
                    token.role = dbUser.role;
                }else{
                    const newUser = await Prisma.user.create({
                        data: {
                            email: user.email,
                            name: user.name,
                            image: user.image,
                            role: "JOB_SEEKER" 
                        }
                    });
                    token.id = newUser.id;
                }
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.image;
                session.user.role = token.role;
            }
            return session;
        },
        redirect(){
            return '/onboarding';    
        }
    }
}

export const getAuthAccount = () => getServerSession(authOptions);