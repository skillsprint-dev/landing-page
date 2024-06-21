"use client";
import * as React from "react";
import ActionButton from "@/components/ActionButton";
import { useTranslation } from "react-i18next";
import "../../i18n.mjs";

export default function Hero() {
  const { t } = useTranslation();
  const heroProps = {
    text: t("heroPage.heroProps.text"),
    subtext: t("heroPage.heroProps.description"),
    button: {
      text: "Book a Free Assessment",
      href: "#",
    },
  };
  return (
    <>
      <section id="home" className="bg-white dark:bg-gray-900">
        <div className="relative flex items-center h-screen">
          <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover brightness-[0.3] filter"></div>
          <div className="relative z-10 max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28 text-center">
            <div className="mr-auto place-self-center">
              <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white" dangerouslySetInnerHTML={{ __html: heroProps.text }}></h1>
              <p className="mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white" dangerouslySetInnerHTML={{ __html: heroProps.subtext }}></p>
              <ActionButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
