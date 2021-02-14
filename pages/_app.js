import "../styles/globals.scss";
import SEO from "../next-seo-config.js";
import { DefaultSeo } from "next-seo";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default MyApp;
