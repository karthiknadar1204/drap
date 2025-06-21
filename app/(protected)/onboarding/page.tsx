import { Button } from '@/components/ui/button'
// import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'

const page = () => {
  return (
    <div>
        <h1>Onboarding</h1>
        <p>
            This is the onboarding page
        </p>
        <Button>
            <RegisterLink>Get started</RegisterLink>
        </Button>
        <Button asChild variant="outline">
            <LoginLink>Login</LoginLink>
        </Button>
    </div>
  )
}

export default page