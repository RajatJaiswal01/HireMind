"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { onboardingSubmission } from "../actions/onboarding";

async function Onboarding({ userId }) {

  const handleOnboardingSubmission = async ({requestedRole}) => {
    const updatedResponse = await onboardingSubmission({requestedRole,userId});
    console.log(updatedResponse);
  }

  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center">
      <Card className="w-full sm:w-1/3">
        <CardHeader>
          <CardTitle> Welcome to HireMind</CardTitle>
          <CardDescription>Choose one which defines you.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full" onClick={() => handleOnboardingSubmission({requestedRole:'JOB_SEEKER'})}>
            I am a Job Seeker
          </Button>
          <Button className="w-full" onClick={() => handleOnboardingSubmission({requestedRole:'EMPLOYER'})}>
            I am a Employer
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Onboarding;
