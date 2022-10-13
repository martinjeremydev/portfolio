import { FormattedMessage } from "react-intl";
import Image from "next/image";
import React from "react";

export default function Service() {
  return (
    <div className="container mx-auto lg:flex flex-row mt-16">
      {/* First section */}
      <div className="w-full md:w-2/3  md:mx-auto lg:w-1/3 mt-8 px-4 flex flex-col justify-center">
        <h1 className="text-2xl uppercase font-bold">
          <FormattedMessage id="page.home.services.first-item-title" />
        </h1>
        <span className="mt-4">
          <FormattedMessage id="page.home.services.first-item-content" />
        </span>
        <div className="mt-8 flex flex-row w-full justify-between px-10">
          <div>
            <Image
              src="/svg/angular.svg"
              className="dark-image"
              alt="Angular Icon"
              width={70}
              height={70}
              layout="intrinsic"
            ></Image>
          </div>
          <div>
            <Image
              src="/svg/react.svg"
              className="mx-8 dark-image"
              alt="React Icon"
              width={70}
              height={70}
              layout="intrinsic"
            ></Image>
          </div>
          <div>
            <Image
              src="/svg/nextjs.svg"
              className="dark-image"
              alt="NextJs Icon"
              width={90}
              height={70}
              layout="intrinsic"
            ></Image>
          </div>
        </div>
      </div>
      {/* Second section */}
      <div className="w-full md:mx-auto md:w-2/3 lg:w-1/3 mt-8 px-4">
        <div className="mb-10">
          <Image
            src="/images/services.jpg"
            alt="Coffee"
            width={500}
            height={350}
            layout="intrinsic"
          ></Image>
        </div>
        <h1 className="text-2xl uppercase font-bold">
          <FormattedMessage id="page.home.services.second-item-title" />
        </h1>
        <div className="mt-4">
          <FormattedMessage id="page.home.services.second-item-content" />
        </div>
      </div>
      {/* Third section */}
      <div className="flex flex-col md:mx-auto justify-center w-full md:w-2/3 lg:w-1/3 mt-8 px-4">
        <h1 className="text-2xl uppercase font-bold">
          <FormattedMessage id="page.home.services.third-item-title" />
        </h1>
        <div className="mt-4">
          <FormattedMessage id="page.home.services.third-item-content" />
        </div>
        <div className="mt-8 flex flex-row w-full justify-between px-10">
          <div>
            <Image
              src="/svg/nodejs.svg"
              alt="NodeJS Icon"
              className="dark-image"
              height={70}
              width={70}
              layout="intrinsic"
            ></Image>
          </div>
          <div>
            <Image
              src="/svg/nestjs.svg"
              className="mx-8 dark-image"
              alt="NestJS Icon"
              width={70}
              height={70}
              layout="intrinsic"
            ></Image>{" "}
          </div>
          <div>
            <Image
              src="/svg/symfony.svg"
              className="dark-image"
              alt="Symfony Icon"
              width={70}
              height={70}
              layout="intrinsic"
            ></Image>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
