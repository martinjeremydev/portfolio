import type { NextPage } from "next";
import HeaderComponent from "../components/header/header";
import WelcomeComponent from "../components/welcome/welcome";
const Home: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <WelcomeComponent />
    </>
  );
};

export default Home;
