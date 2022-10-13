import React from "react";
import { FormattedMessage } from "react-intl";
import Image from "next/image";

export default function Competences() {
  return (
    <div className="container mx-auto lg:flex flex-row">
      <div className="flex flex-col w-full lg:w-1/2 items-center">
        <div className="mb-12">
          <span className="font-bold text-2xl">
            <FormattedMessage id="page.home.competences.first-item-title" />
          </span>
        </div>
        <div className="flex flex-row">
          <div className="mr-8">
            <div className="text-6xl rotated-text">100%</div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="mr-2 lg:mr-4 ">
                <Image
                  className="block dark-image"
                  src="/svg/angular.svg"
                  alt="Angular logo"
                  width={75}
                  height={75}
                  layout="intrinsic"
                ></Image>
              </div>
              <div className="mr-2 lg:mr-4 ">
                <Image
                  className="mr-2 lg:mr-4 dark-image"
                  src="/svg/react.svg"
                  alt="React logo"
                  width={75}
                  height={75}
                  layout="intrinsic"
                ></Image>
              </div>
              <div className="mr-2 lg:mr-4 ">
                <Image
                  className="mr-2 lg:mr-4 dark-image"
                  src="/svg/vuejs.svg"
                  alt="Vuejs Logo"
                  width={75}
                  height={75}
                  layout="intrinsic"
                ></Image>
              </div>
              <div className="mr-2 lg:mr-4 ">
                <Image
                  className="mr-2 lg:mr-4 dark-image"
                  src="/svg/nextjs.svg"
                  alt="Nextjs Logo"
                  width={90}
                  height={75}
                  layout="intrinsic"
                ></Image>
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <div className="mr-2 lg:mr-4 ">
                <Image
                  className="mr-7 dark-image"
                  src="/svg/html5.svg"
                  alt="Html 5 logo"
                  width={75}
                  height={75}
                  layout="intrinsic"
                ></Image>
              </div>
              <div className="mr-2 lg:mr-4 ">
                <Image
                  className="mr-9 dark-image"
                  src="/svg/css.svg"
                  alt="Css 3 logo"
                  width={75}
                  height={75}
                  layout="intrinsic"
                ></Image>
              </div>
              <div className="mr-2 lg:mr-4 ">
                <Image
                  className="mr-7 dark-image"
                  src="/svg/js.svg"
                  alt="Javascript 5 Logo"
                  width={75}
                  height={75}
                  layout="intrinsic"
                ></Image>
              </div>
              <Image
                className="mr-2 md:mr-4 dark-image"
                src="/svg/xd.svg"
                alt="Adobe XD Logo"
                width={65}
                height={65}
                layout="intrinsic"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 items-center mt-12 lg:mt-0">
        <div className="mb-14">
          <span className="font-bold text-2xl">
            <FormattedMessage id="page.home.competences.second-item-title" />
          </span>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="mr-4">
                <Image
                  className="mr-4 dark-image"
                  src="/svg/firebase.svg"
                  alt="Firebase logo"
                  width={75}
                  height={75}
                  layout="intrinsic"
                ></Image>
              </div>
              <div className="mr-4">
                <Image
                  className="mr-4 dark-image"
                  src="/svg/nestjs.svg"
                  alt="NestJS logo"
                  width={75}
                  height={75}
                  layout="intrinsic"
                ></Image>
              </div>
              <div className="mr-4">
                <Image
                  className="mr-4 dark-image"
                  src="/svg/symfony.svg"
                  alt="Symfony Logo"
                  width={75}
                  height={75}
                  layout="intrinsic"
                ></Image>
              </div>
              <div>
                <Image
                  className="mr-4 dark-image"
                  src="/svg/git.svg"
                  alt="Git Logo"
                  width={75}
                  height={75}
                  layout="intrinsic"
                ></Image>
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <div className="mr-4">
                <Image
                  className="mr-8 dark-image"
                  src="/svg/docker.svg"
                  alt="Docker logo"
                  width={75}
                  height={75}
                  layout="intrinsic"
                ></Image>
              </div>
              <div className="mr-4">
                <Image
                  className="mr-4 dark-image"
                  src="/svg/nodejs.svg"
                  alt="NodeJS logo"
                  width={90}
                  height={75}
                  layout="intrinsic"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="absolute right-0 hidden lg:block z-negative"
          src="/svg/clavier.svg"
          alt="keyboard icon"
          width={400}
          height={200}
        ></img>
      </div>
    </div>
  );
}
