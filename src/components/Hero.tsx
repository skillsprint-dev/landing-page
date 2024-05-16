import * as React from "react"
import ActionButton from "@/components/ActionButton"

export default function Hero() {
  const heroProps = {
    text: "Turn Dreams Into Offers<br />Let's Make It Happen",
    subtext: "With our personalized mentorship and savvy job-hunting strategies,<br /> Transition from aspiring coder to employed engineer has never been easier.",
    button: {
      text: "Book a Free Assessment",
      href: "#",
    },
  }
  return (
    <>
      <section id="home" className="bg-white dark:bg-gray-900">
        <div className="relative flex items-center h-screen">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover brightness-[0.3] filter"></div>
          <div className="relative z-10 max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28 text-center">
              <div className="mr-auto place-self-center">
                  <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white" dangerouslySetInnerHTML={{ __html: heroProps.text}}></h1>
                  <p className="mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white" dangerouslySetInnerHTML={{ __html: heroProps.subtext}}></p>
                  <ActionButton />
              </div>
          </div>
        </div>
      </section>
    </>
  )
}
