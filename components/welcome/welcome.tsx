import { FormattedMessage } from "react-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Welcome() {
  return (
    <div className="bg-welcome">
      <img
        src="/svg/welcome.svg"
        alt="Web developer since 8 years"
        className="absolute welcome-svg"
        height={700}
        width={500}
      ></img>
    </div>
  );
}
