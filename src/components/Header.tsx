"use client";
import * as React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../../i18n.mjs";

export default function Header() {
  const { t, i18n } = useTranslation();
  const changeLanguage = () => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  const headerProps = {
    logo: "/SkillSprint_logo.png",
    title: "TalentsFlow",
    navItems: [
      {
        name: t("headerPage.headerPropsNavItems.home"),
        href: "#home",
      },
      {
        name: t("headerPage.headerPropsNavItems.features"),
        href: "#features",
      },
      {
        name: t("headerPage.headerPropsNavItems.services"),
        href: "#services",
      },
      {
        name: t("headerPage.headerPropsNavItems.testimonials"),
        href: "#testimonials",
      },
      {
        name: t("headerPage.headerPropsNavItems.contact"),
        href: "#footer",
      }
    ],
  };
  return (
    <header className="z-50 fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <img src={headerProps.logo} className="h-6 mr-3 sm:h-16" alt="Landwind Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{headerProps.title}</span>
          </a>
          <div className="flex-grow" />
          <div className="flex items-center lg:order-2">
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {/* <li> */}
              {/*   <a href="#" className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white" aria-current="page">Home</a> */}
              {/* </li> */}
              {
                headerProps.navItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{item.name}</a>
                  </li>
                ))
              }
              <button onClick={changeLanguage}>EN / 中</button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
