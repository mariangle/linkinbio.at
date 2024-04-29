"use client"

import * as React from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export function AuthForm() {
  const [isLoading, setIsLoading] = React.useState(false);

  const login = () => {
    setIsLoading(true);
    try {
      signIn("google", {
        callbackUrl: "/dashboard",
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={login} disabled={isLoading}>
        Sign in with Google
      </Button>
    </div>
  )
}
