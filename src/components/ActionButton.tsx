"use client";
import { useUser } from "@clerk/nextjs";
import { useTranslation } from "react-i18next";
import "../../i18n.mjs";

export default function ActionButton() {
  const href = "https://calendly.com/skillsprint/free-assessment";
  const { t } = useTranslation();
  const { user } = useUser();
  const handleBookingClick = () => {
    if (!user) {
      window.location.href = '/sign-in';
    } else {
      window.location.href = href;
    }
  };

  return (
    <button
      onClick={handleBookingClick}
      className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hvr-sweep-to-right dark:bg-gray-700"
    >
      {t('actionButtonPage.bookAssessmentButton.text')}
    </button>
  )
}
