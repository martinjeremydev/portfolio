import { FormattedMessage } from "react-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between">
      <div className="">
        <Image
          src="/svg/logo.svg"
          alt="My awesome logo"
          height={200}
          width={220}
        />
      </div>
      <div className="flex-row hidden md:flex">
        <div className="md:mx-5 lg:mx-10">
          <Link href="/#services">
            <span className="cursor-pointer">
              <FormattedMessage id="page.home.header.first-item" />
            </span>
          </Link>
        </div>
        <div className="md:mx-5 lg:mx-10">
          <Link href="/#competences">
            <span className="cursor-pointer">
              <FormattedMessage id="page.home.header.second-item" />
            </span>
          </Link>
        </div>
        <div className="md:mx-5 lg:mx-10">
          <Link href="/portfolio">
            <span className="cursor-pointer">
              <FormattedMessage id="page.home.header.third-item" />
            </span>
          </Link>
        </div>
        <div className="md:mx-5 lg:mx-10">
          <Link href="/contact">
            <span className="cursor-pointer">
              <FormattedMessage id="page.home.header.fourth-item" />
            </span>
          </Link>
        </div>
      </div>
      <div className="mr-20 md:mr-8 lg:mr-16">
        <Link href="/" locale="fr">
          <a>Fr.</a>
        </Link>
        <span className="mx-2">/</span>
        <Link href="/" locale="en">
          <a>En.</a>
        </Link>
      </div>
    </header>
  );
}
