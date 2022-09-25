import "../styles/globals.css";
import type { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import en from "../lang/en.json";
import fr from "../lang/fr.json";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const messages = {
    en,
    fr,
  };

  return (
    <IntlProvider locale={locale ?? "fr"} messages={messages[locale ?? "fr"]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
