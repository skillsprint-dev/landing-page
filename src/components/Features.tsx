"use client";
import * as React from "react";
import { useTranslation } from "react-i18next";
import "../../i18n.mjs";

export default function Features() {
  const { t } = useTranslation();
  const featureProps = {
    items: [
      {
        text: t("featuresPage.featurePropsItems.personalizedTrainingPrograms.text"),
        subtext: t("featuresPage.featurePropsItems.personalizedTrainingPrograms.description"),
        image: "training_program.jpg",
      },
      {
        text: t("featuresPage.featurePropsItems.1On1SessionsWithInstructors.text"),
        subtext: t("featuresPage.featurePropsItems.1On1SessionsWithInstructors.description"),
        image: "1-on-1.jpg",
      },
      {
        text: t("featuresPage.featurePropsItems.resumePerfectionService.text"),
        subtext: t("featuresPage.featurePropsItems.resumePerfectionService.description"),
        image: "resume_service.jpg",
      },
      {
        text: t("featuresPage.featurePropsItems.mockInterviews.text"),
        subtext: t("featuresPage.featurePropsItems.mockInterviews.description"),
        // image: "https://placehold.co/600x400/EEE/31343C",
        image: "mock_interview.jpg",
      },
      {
        text: t("featuresPage.featurePropsItems.careerReferral.text"),
        subtext: t("featuresPage.featurePropsItems.careerReferral.description"),
        image: "career_referral.jpg",
      },
    ]
  };
  return (
    <>
      <section id="features" className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 mx-auto space-y-12 lg:space-y-20 py-24 lg:px-6">
          {featureProps.items.map((item, index) => (
            <div key={index} className={`items-center gap-8 xl:gap-16 flex flex-col ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
              <img className="mb-4 rounded-lg md:mb-0 md:flex w-2/3 md:w-1/2 aspect-video object-cover" src={item.image} alt="dashboard feature image" />
              <div className="text-gray-500 sm:text-lg dark:text-gray-400 w-2/3 flex-auto">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{item.text}</h2>
                <p className="mb-8 font-light lg:text-xl">{item.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
