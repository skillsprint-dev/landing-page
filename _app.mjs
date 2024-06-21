import { appWithTranslation } from "next-i18next";
import "../i18n.mjs";

function LandingPage({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default appWithTranslation(LandingPage);
