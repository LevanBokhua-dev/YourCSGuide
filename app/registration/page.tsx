"use client";
import React from "react";
import Image from "next/image";
import RegistrationBox from "@/app/components/registration/registrationBox";
import { useRedirectIfLoggedIn } from "@/app/shared/useRedirectIfAuthorized";

const Registration = () => {
  useRedirectIfLoggedIn();
  return (
    <div
      className="relative
    "
    >
      <div className="absolute right-0 top-[-50px] z-[-10] hidden sm:block">
        <Image
          src="/assets/CSGuide_Background_Transparent.png"
          alt="transparent background"
          width={600}
          height={600}
          priority
        />
      </div>
      <RegistrationBox />
    </div>
  );
};

export default Registration;
