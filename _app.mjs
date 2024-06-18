import { appWithTranslation } from "next-i18next"
import "../i18n.mjs"

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
