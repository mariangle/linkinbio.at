"use client";

import { RegisterForm } from "./register-form";
import { LoginForm } from "./login-form";

import { Logo } from "@/components/ui/logo";
import Link from "next/link";

type Variant = "sign-in" | "sign-up";

export function AuthForm({ variant }: { variant: Variant }) {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="flex flex-col items-center">
        <Logo className="size-10 fill-[#E3FFCC]" />
        <h1 className="mt-4 text-2xl font-bold">
          {variant === "sign-in" ? "Sign In" : "Sign Up"}
        </h1>
        <p className="mt-2 text-sm text-[#B8CEC1]">
          Get started for free. No credit card required.
        </p>
      </div>
      <div className="pointer-events-auto mt-4 w-full">
        {variant === "sign-up" ? <RegisterForm /> : <LoginForm />}
        <div className="mt-8 text-center text-xs text-[#B8CEC1]">
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
