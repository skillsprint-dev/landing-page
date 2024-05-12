import * as React from "react"
import Link from "next/link"

export default function Contect() {
  const contactProps = {
    title: "Contact Us",
    email: "skillsprint.tech@gmail.com",
  }
  return (
    <>
      <section id="contact" className="bg-gray-50 dark:bg-gray-800">
        <div className="relative max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl pb-8">{contactProps.title}</h1>
            <p className="mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline pb-1 mr-2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> </g></svg>
              <span className="">{contactProps.email}</span>
          </p>
        </div>
      </section>
    </>
  )
}
