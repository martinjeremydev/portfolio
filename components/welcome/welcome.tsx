import React from "react";

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
