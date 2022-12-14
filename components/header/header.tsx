import { FormattedMessage } from "react-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Header(props: {
  hoveredSection: string;
  setHoveredSection: any;
}) {
  const { locale } = useRouter();
  return (
    <header className="bg-white	fixed w-full flex flex-row items-center justify-between z-50">
      <div className="">
        <Image
          src="/svg/logo.svg"
          alt="My awesome logo"
          height={200}
          width={220}
        />
      </div>
      <div className="flex-row hidden md:flex">
        <div
          className={`md:mx-5 lg:mx-10 " + ${
            props.hoveredSection === "services" ? "active" : ""
          }
              `}
        >
          <Link href="/#services">
            <span
              onClick={() => props.setHoveredSection("services")}
              className="cursor-pointer text-xl"
            >
              <FormattedMessage id="page.home.header.first-item" />
            </span>
          </Link>
        </div>
        <div
          className={`md:mx-5 lg:mx-10 " + ${
            props.hoveredSection === "competences" ? "active" : ""
          }
              `}
        >
          <Link href="/#competences">
            <span
              className="cursor-pointer text-xl"
              onClick={() => props.setHoveredSection("competences")}
            >
              <FormattedMessage id="page.home.header.second-item" />
            </span>
          </Link>
        </div>
        <div
          className={`md:mx-5 lg:mx-10 " + ${
            props.hoveredSection === "portfolio" ? "active" : ""
          }
              `}
        >
          <Link href="/#portfolio">
            <span
              className="cursor-pointer text-xl"
              onClick={() => props.setHoveredSection("portfolio")}
            >
              <FormattedMessage id="page.home.header.third-item" />
            </span>
          </Link>
        </div>
        <div
          className={`md:mx-5 lg:mx-10 " + ${
            props.hoveredSection === "contact" ? "active" : ""
          }
              `}
        >
          <Link href="/#contact">
            <span
              className="cursor-pointer text-xl"
              onClick={() => props.setHoveredSection("contact")}
            >
              <FormattedMessage id="page.home.header.fourth-item" />
            </span>
          </Link>
        </div>
      </div>
      <div className="mr-20 md:mr-8 lg:mr-16">
        <Link href="" locale="fr">
          <a className={locale === "fr" ? "current-lang" : ""}>Fr.</a>
        </Link>
        <span className="mx-2">/</span>
        <Link href="" locale="en">
          <a className={locale === "en" ? "current-lang" : ""}>En.</a>
        </Link>
      </div>
    </header>
  );
}
