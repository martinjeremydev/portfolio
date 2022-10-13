import React from "react";
import Image from "next/image";
export default function Welcome() {
  return (
    <div className="bg-welcome">
      <div className="welcome-svg">
        <Image
          src="/svg/welcome.svg"
          alt="Web developer since 8 years"
          height={536}
          width={600}
          layout="intrinsic"
        ></Image>
      </div>
    </div>
  );
}
