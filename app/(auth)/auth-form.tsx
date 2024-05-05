"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";

type Variant = "sign-in" | "sign-up";

export function AuthForm({ variant }: { variant: Variant }) {
  const [isLoading, setIsLoading] = React.useState(false);

  const login = () => {
    setIsLoading(true);
    try {
      signIn("google", {
        callbackUrl: "/dashboard/links",
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="flex flex-col items-center">
        <Image
          src="/icon.svg"
          alt="logo"
          width={50}
          height={50}
          className="size-10"
        />
        <h1 className="mt-4 text-2xl font-bold text-white">
          {variant === "sign-in" ? "Sign In" : "Sign Up"}
        </h1>
        <p className="mt-2 text-sm text-slate-300">
          Get started for free. No credit card required.
        </p>
      </div>
      <div className="mt-4">
        <Button
          onClick={login}
          disabled={true}
          className="h-12 w-full"
          size="lg"
        >
          <FaGoogle className="mr-3 size-4" />
          Continue with Google
        </Button>
        <div className="mt-8 text-center text-xs text-slate-300">
          {variant === "sign-in"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <Link
            className="text-white"
            href={variant === "sign-in" ? "/sign-up" : "/sign-in"}
          >
            {variant === "sign-in" ? "Sign Up" : "Sign In"}
          </Link>
        </div>
      </div>
    </div>
  );
}
