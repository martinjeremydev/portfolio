import type { NextPage } from "next";
import HeaderComponent from "../components/header/header";
import WelcomeComponent from "../components/welcome/welcome";
import ServiceComponent from "../components/services/services";
import CompetencesComponent from "../components/competences/competences";
import PortfolioComponent from "../components/portfolio/portfolio";
import ContactComponent from "../components/contact/contact";
import { useState } from "react";
import { useIntl } from "react-intl";
import Head from "next/head";

const Home: NextPage = () => {
  const [hoveredSection, setHoveredSection] = useState("");
  const setHoveredSectionTest = (section: string) => {
    setHoveredSection(section);
  };
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.seo.title" });
  const description = intl.formatMessage({ id: "page.seo.description" });
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
      </Head>
      <HeaderComponent
        hoveredSection={hoveredSection}
        setHoveredSection={setHoveredSectionTest}
      />
      <section
        id="welcome"
        onMouseEnter={() => setHoveredSectionTest("services")}
      >
        <WelcomeComponent />
      </section>
      <section
        id="services"
        onMouseEnter={() => setHoveredSectionTest("services")}
      >
        <ServiceComponent />
      </section>
      <section
        id="competences"
        className="pt-32"
        onMouseEnter={() => setHoveredSectionTest("competences")}
      >
        <CompetencesComponent />
      </section>
      <section
        id="portfolio"
        onMouseEnter={() => setHoveredSectionTest("portfolio")}
      >
        <PortfolioComponent />
      </section>
      <section
        id="contact"
        onMouseEnter={() => setHoveredSectionTest("contact")}
      >
        <ContactComponent />
      </section>
    </>
  );
};

export default Home;
