import { FormattedMessage } from "react-intl";
import Image from "next/image";
import React from "react";

export default function Service() {
  return (
    <div className="container mx-auto lg:flex flex-row mt-16">
      {/* First section */}
      <div className="w-full md:w-2/3  md:mx-auto lg:w-1/3 mt-8 px-4 flex flex-col justify-center">
        <span className="text-2xl uppercase font-bold">
          <FormattedMessage id="page.home.services.first-item-title" />
        </span>
        <div className="mt-4">
          <FormattedMessage id="page.home.services.first-item-content" />
        </div>
        <div className="mt-8 flex flex-row w-full justify-center">
          <img
            src="/svg/angular.svg"
            className="dark-image"
            alt="Angular Icon"
            width={65}
          ></img>
          <img
            src="/svg/react.svg"
            className="mx-8 dark-image"
            alt="React Icon"
            width={70}
          ></img>
          <img
            src="/svg/nextjs.svg"
            className="dark-image"
            alt="NextJs Icon"
            width={90}
          ></img>
        </div>
      </div>
      {/* Second section */}
      <div className="w-full md:mx-auto md:w-2/3 lg:w-1/3 mt-8 px-4">
        <div className="mb-10">
          <img src="/images/services.jpg" alt="Coffee" height={50}></img>
        </div>
        <span className="text-2xl uppercase font-bold">
          <FormattedMessage id="page.home.services.second-item-title" />
        </span>
        <div className="mt-4">
          <FormattedMessage id="page.home.services.second-item-content" />
        </div>
      </div>
      {/* Third section */}
      <div className="flex flex-col md:mx-auto justify-center w-full md:w-2/3 lg:w-1/3 mt-8 px-4">
        <span className="text-2xl uppercase font-bold">
          <FormattedMessage id="page.home.services.third-item-title" />
        </span>
        <div className="mt-4">
          <FormattedMessage id="page.home.services.third-item-content" />
        </div>
        <div className="mt-8 flex flex-row w-full justify-center">
          <img
            src="/svg/nodejs.svg"
            alt="NodeJS Icon"
            className="dark-image"
            width={80}
          ></img>
          <img
            src="/svg/nestjs.svg"
            className="mx-8 dark-image"
            alt="NestJS Icon"
            width={65}
          ></img>
          <img
            src="/svg/symfony.svg"
            className="dark-image"
            alt="Symfony Icon"
            width={65}
          ></img>
        </div>
      </div>
    </div>
  );
}
