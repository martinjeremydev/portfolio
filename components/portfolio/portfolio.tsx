import React from "react";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

export default function Portfolio() {
  return (
    <>
      <div className="container mx-auto lg:flex flex-row mt-24 lg:mt-80 justify-evenly w-full">
        <div className="portfolio-container mx-auto mb-8 md:mb-16 lg:mb-0 relative">
          <Image
            src={"/images/hermes.png"}
            layout="responsive"
            height={300}
            width={500}
            alt="Site Hermes"
          />
          <div className="hoverable-informations flex flex-col justify-center px-8">
            <span className="font-bold text-3xl mb-4 text-center">Hermès</span>
            <span className="text-center">
              <FormattedMessage id="page.home.portfolio.first-item-content" />
            </span>
          </div>
        </div>
        <div className="portfolio-container mx-auto  mb-8 md:mb-16 lg:mb-0 relative">
          <Image
            src={"/images/poste.png"}
            layout="responsive"
            height={300}
            width={500}
            alt="Site la poste"
          />
          <div className="hoverable-informations flex flex-col justify-center px-8">
            <span className="font-bold text-3xl mb-4 text-center">
              La poste
            </span>
            <span className="text-center">
              <FormattedMessage id="page.home.portfolio.second-item-content" />
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:flex flex-row lg:mt-20 justify-evenly w-full">
        <div className="portfolio-container mx-auto  mb-8 md:mb-16 lg:mb-0 relative">
          <Image
            src={"/images/hub3e.png"}
            layout="responsive"
            height={300}
            width={500}
            alt="Site Hub3e"
          />
          <div className="hoverable-informations flex flex-col justify-center px-8">
            <span className="font-bold text-3xl mb-4 text-center">Hub3e</span>
            <span className="text-center">
              <FormattedMessage id="page.home.portfolio.third-item-content" />
            </span>
          </div>
        </div>
        <div className="portfolio-container mx-auto  mb-8 md:mb-16 lg:mb-0 relative">
          <Image
            src={"/images/luluberlu.png"}
            layout="responsive"
            height={300}
            width={500}
            alt="Site luluberlu"
          />
          <div className="hoverable-informations flex flex-col justify-center px-8">
            <span className="font-bold text-3xl mb-4 text-center">
              Luluberlu
            </span>
            <span className="text-center">
              <FormattedMessage id="page.home.portfolio.fourth-item-content" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
