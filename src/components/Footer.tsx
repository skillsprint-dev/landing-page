import * as React from "react";
import Link from "next/link";

export default function Footer() {
  const footerProps = {
    logo: "/SkillSprint_logo.png",
    title: "TalentsFlow",
    email: "contactus@talentsflow.ai",
  };
  return (
    <>
      <footer id="footer" className="bg-white dark:bg-gray-800">
        <div className="max-w-screen-xl p-4 mx-auto py-16 md:p-8 lg:p-10 lg:py-20">
          <div className="text-center">
            <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
              <img src={footerProps.logo} className="h-6 mr-3 sm:h-9" alt={`${footerProps.title} Logo`} />
              {footerProps.title}
            </a>
            <p className="mb-6 font-light lg:mb-8 md:text-lg lg:text-xl pt-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline mr-2"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path></g></svg>
              <span className="">{footerProps.email}</span>
            </p>
            <span className="block text-sm text-center text-gray-500 dark:text-gray-400">Copyright © 2024 TalentsFlow Inc. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
