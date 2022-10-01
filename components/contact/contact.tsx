import React from "react";
import { FormattedMessage } from "react-intl";

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
      <img src="/images/bg-contact.png" alt="Background contact"></img>
    </div>
  );
}
