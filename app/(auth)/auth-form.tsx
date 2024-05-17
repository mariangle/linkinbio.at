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
        <h1 className="mt-4 text-2xl font-bold">
          {variant === "sign-in" ? "Sign In" : "Sign Up"}
        </h1>
        <p className="mt-2 text-sm">
          Get started for free. No credit card required.
        </p>
      </div>
      <div className="pointer-events-auto mt-4">
        <button
          onClick={login}
          disabled={true}
          className="flex h-12 w-full cursor-not-allowed items-center gap-2 rounded-full bg-foreground px-4 font-medium text-background disabled:opacity-70"
        >
          <FaGoogle className="size-4" />
          {variant === "sign-in" ? "Continue" : "Sign up"} with Google
        </button>
        <div className="mt-8 text-center text-xs">
          {variant === "sign-in"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <Link
            href={variant === "sign-in" ? "/sign-up" : "/sign-in"}
            className="underline"
          >
            {variant === "sign-in" ? "Sign Up" : "Sign In"}
          </Link>
        </div>
      </div>
    </div>
  );
}
