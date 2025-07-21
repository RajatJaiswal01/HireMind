import { getAuthAccount } from '@/lib/auth';
import React from 'react'

async function onboarding() {
  const session = await getAuthAccount();
  console.log(session, "Session Data");
  return (
    <div>
      Onboarding
    </div>
  )
}

export default onboarding
