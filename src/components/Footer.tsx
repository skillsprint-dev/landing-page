import * as React from "react"
import Link from "next/link"

export default function Footer() {
  const footerProps = {
    logo: "/SkillSprint_logo.png",
    title: "SkillSprint",
  }
  return (
    <>
      <footer className="bg-white dark:bg-gray-800">
          <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
              <div className="text-center">
                  <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                      <img src={footerProps.logo} className="h-6 mr-3 sm:h-9" alt={ `${footerProps.title} Logo` } />
                      {footerProps.title}
                  </a>
                  <span className="block text-sm text-center text-gray-500 dark:text-gray-400">Copyright © 2024 SkillSprint Tech Inc. All Rights Reserved.</span>
              </div>
          </div>
      </footer>
    </>
  )
}
