import type { NextPage } from "next";
import HeaderComponent from "../components/header/header";
import WelcomeComponent from "../components/welcome/welcome";
import ServiceComponent from "../components/services/services";
import CompetencesComponent from "../components/competences/competences";
const Home: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <WelcomeComponent />
      <ServiceComponent />
      <CompetencesComponent />
    </>
  );
};

export default Home;
