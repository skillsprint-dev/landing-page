import * as React from "react"
import Link from "next/link"

export default function Hero() {
  const heroProps = {
    text: "From Learning To Earning, <br /> Offer Guaranteed!",
    subtext: "Lorem ipsum dolor sit amet, <br /> qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    button: {
      text: "Book a Free Assessment",
      href: "#",
    },
  }
  return (
    <>
      <section id="home" className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="relative">
          <div className="min-h-screen absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover brightness-50 filter"></div>
          <div className="relative z-10 max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28 text-center">
              <div className="mr-auto place-self-center">
                  <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white" dangerouslySetInnerHTML={{ __html: heroProps.text}}></h1>
                  <p className="mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white" dangerouslySetInnerHTML={{ __html: heroProps.subtext}}></p>
                  <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                      <a href={heroProps.button.href} className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hvr-sweep-to-right dark:bg-gray-700">
                        {heroProps.button.text}
                      </a> 
                  </div>
              </div>
          </div>
        </div>
        {/* <svg className="animate-bounce w-6 h-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"> */}
        {/*   <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> */}
        {/* </svg> */}
      </section>
    </>
  )
}
