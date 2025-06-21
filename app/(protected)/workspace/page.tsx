import { getUserWorkspaces } from '@/app/data/workspace/get-user-workspaces'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
    const {data}=await getUserWorkspaces()

    if (data?.onboardingCompleted && data?.workspaces?.length === 0) {
        redirect("/create-workspace")
    }else if(!data?.onboardingCompleted){
        redirect("/onboarding")
    }else{
        redirect(`/workspaces/${data?.workspaces[0]?.workspaceId}`)
    }
}

export default page