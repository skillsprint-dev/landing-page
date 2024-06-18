"use client"
import * as React from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import "../../i18n.mjs"

export default function Services() {
  const { t } = useTranslation()
  const servicesProps = {
    items: [
      {
        text: t("servicesPage.servicesPropsItems.0.largeScaleProjectExperience"),
      },
      {
        text: t("servicesPage.servicesPropsItems.1.personalizedTrainingPrograms"),
      },
      {
        text: t("servicesPage.servicesPropsItems.2.mockInterviews"),
      },
      {
        text: t("servicesPage.servicesPropsItems.3.1On1CareerAdviceAndPlanning"),
      },
      {
        text: t("servicesPage.servicesPropsItems.4.designPatternsAndAlgorithms"),
      },
      {
        text: t("servicesPage.servicesPropsItems.5.databaseAndSQLSkills"),
      },
      {
        text: t("servicesPage.servicesPropsItems.6.jobSearchSkills"),
      },
      {
        text: t("servicesPage.servicesPropsItems.7.codingInterviewSkills"),
      },
      {
        text: t("servicesPage.servicesPropsItems.8.professionalWorkEthics"),
      },
      {
        text: t("servicesPage.servicesPropsItems.9.networkAndReferralOpportunities"),
      },
      {
        text: t("servicesPage.servicesPropsItems.10.aiAndMlSkills"),
      },
      {
        text: t("servicesPage.servicesPropsItems.11.resumePreparation"),
      },
    ]
  }
  return (
    <>
      <section id="services" className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-white text-center">{t('servicesPage.ourServices')}</h1>
          <ul role="list" className="pt-8 border-t border-gray-200 my-7 dark:border-gray-700 flex flex-wrap">
            {servicesProps.items.map((item, index) => (
              <li key={index} className="flex space-x-3 w-full md:w-1/2 my-4 pl-40">
                <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
