import Signin from "@/components/Auth/Signin";
import { ThemeToggleSwitch } from "@/components/Layouts/header/theme-toggle";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function SignIn() {
  return (
    <div className="relative flex h-screen overflow-hidden bg-white dark:bg-gray-dark">
      
      {/* Theme Toggle (Top Right) */}
      <div className="absolute right-6 top-6 z-50">
        <ThemeToggleSwitch />
      </div>

      {/* Left Side - Form */}
      <div className="flex h-full w-full items-center justify-center xl:w-1/2">
        <div className="w-full max-w-md px-6 sm:px-12">
          <Signin />
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden h-full xl:flex xl:w-1/2">
        <div className="custom-gradient-1 flex h-full w-full flex-col justify-center px-12 dark:!bg-dark-2 dark:bg-none">
          <Link className="mb-8 inline-block" href="/">
            <span className="text-4xl font-extrabold text-dark dark:text-white">
              IT B2B
            </span>
          </Link>

          <p className="mb-3 text-xl font-medium text-dark dark:text-white">
            Sign in to your account
          </p>

          <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
            Welcome!
          </h1>

          <p className="max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
            Log in to access the IT B2B platform
          </p>

          <div className="mt-10">
            <Image
              src="/images/mainpage logo/logo.png"
              alt="Illustration"
              width={350}
              height={280}
              loading="eager"
              style={{ width: "auto", height: "auto" }}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}