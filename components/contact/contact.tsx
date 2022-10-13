import React from "react";
import { FormattedMessage } from "react-intl";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-contact">
      <div className="contact-block flex flex-col my-8 lg:md-0 text-center">
        <span className="text-2xl lg:text-4xl mb-4">
          <FormattedMessage id="page.contact.title" />
        </span>
        <span className="text-xl lg:text-4xl email-text">
          <a href="mailto:jeremymartinperso@gmail.com">
            jeremymartinperso@gmail.com
          </a>
        </span>
      </div>
      <div>
        <Image
          src="/images/bg-contact.png"
          alt="Background contact"
          width={1920}
          height={1080}
          layout="responsive"
        ></Image>
      </div>
    </div>
  );
}
