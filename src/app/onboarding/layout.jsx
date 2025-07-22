import { getAuthAccount } from '@/lib/auth';
import { notFound, redirect } from 'next/navigation';
import React from 'react'
import { checkOnboarding } from '../actions/onboarding'; 
import Onboarding from './page';

async function onboardingLayout({children}) {
    const session = await getAuthAccount();
    const userId = session?.user.id;

    if (!session || !session?.user) return redirect('/sign-in');

    const onboardingStatus = await checkOnboarding(userId);
    console.log(onboardingStatus);
    if (onboardingStatus !== 'NOT_SET') return redirect('/jobs');
    return <Onboarding userId={userId}/>
}

export default onboardingLayout
