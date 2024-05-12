import * as React from "react"
import Link from "next/link"

export default function Action() {
  const actionProps = {
    text: "Ready to get started?",
    subtext: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    button: {
      text: "Book a Free Assessment",
      href: "#",
    },
  }
  return (
    <>
      <div>
        <section id="action" className="bg-[#2E4053]">
          <div className="relative z-10 max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28">
            <div className="mr-auto place-self-center text-center">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white pb-8" dangerouslySetInnerHTML={{ __html: actionProps.text}}></h1>
              <p className="mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white pb-12" dangerouslySetInnerHTML={{ __html: actionProps.subtext}}></p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                <a href={actionProps.button.href} className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hvr-sweep-to-right dark:bg-gray-700">
                  {actionProps.button.text}
                </a> 
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
