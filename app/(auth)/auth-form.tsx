"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { signIn } from "next-auth/react";
import { SignInForm } from "./sign-in-form";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";

type Variant = "sign-in" | "sign-up";

export function AuthForm({ variant }: { variant: Variant }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

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

  const signInCreds = async () => {
    const res = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      callbackUrl: "/dashboard/links",
    });

    console.log(res);
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
          disabled
          className="flex h-12 w-full items-center gap-2 rounded-full bg-foreground px-4 font-medium text-background disabled:cursor-not-allowed disabled:opacity-70"
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
            className="text-muted-foreground underline"
          >
            {variant === "sign-in" ? "Sign Up" : "Sign In"}
          </Link>
        </div>
      </div>
    </div>
  );
}
