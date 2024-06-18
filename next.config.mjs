import { i18n } from "./next-i18next.config.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  i18n,
}

export default nextConfig