import React from "react";
import Image from "next/image";
import Login from "@/app/components/login/login";

const Registration = () => {
  return (
    <div
      className="relative
    "
    >
      <div className="absolute right-0 top-[-50px] z-[-10]">
        <Image
          src="/assets/CSGuide_Background_Transparent.png"
          alt="transparent background"
          width={600}
          height={600}
          priority
        />
      </div>
      <Login />
    </div>
  );
};

export default Registration;
