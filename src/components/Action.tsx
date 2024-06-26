"use client";
import * as React from "react";
import Link from "next/link";
import ActionButton from "@/components/ActionButton";
import { useTranslation } from "react-i18next";
import "../../i18n.mjs";

export default function Action() {
  const { t } = useTranslation();
  const actionProps = {
    text: t("actionPage.actionProps.text"),
    subtext: t("actionPage.actionProps.description"),
    button: {
      text: "Book a Free Assessment",
      href: "#",
    },
  };
  return (
    <>
      <div>
        <section id="action" className="bg-[#2E4053]">
          <div className="relative z-10 max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0">
            <div className="mr-auto place-self-center text-center">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white pb-8" dangerouslySetInnerHTML={{ __html: actionProps.text }}></h1>
              <p className="mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white pb-8" dangerouslySetInnerHTML={{ __html: actionProps.subtext }}></p>
              <ActionButton />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
