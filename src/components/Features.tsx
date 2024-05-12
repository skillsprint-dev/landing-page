import * as React from "react"
import Link from "next/link"

export default function Features() {
  const featureProps = {
    items: [
      {
        text: "Personalized Training Program",
        subtext: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        image: "training_program.jpg",
      },
      {
        text: "1-on-1 sessions with instructor",
        subtext: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        image: "1-on-1.jpg",
      },
      {
        text: "Resume Perfection Service",
        subtext: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        image: "resume_service.jpg",
      },
      {
        text: "Mock Interview",
        subtext: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        // image: "https://placehold.co/600x400/EEE/31343C",
        image: "mock_interview.jpg",
      },
      {
        text: "Career Referral",
        subtext: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        image: "career_referral.jpg",
      },
    ]
  }
  return (
    <>
      <section id="features" className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            { featureProps.items.map((item, index) => (
                <div key={index} className={ "items-center gap-8 xl:gap-16 " + (index % 2 === 0 ? "flex flex-row-reverse" : "flex") }>
                    <img className="hidden mb-4 rounded-lg lg:mb-0 lg:flex w-1/2 aspect-video object-cover" src={item.image} alt="dashboard feature image" />
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{item.text}</h2>
                        <p className="mb-8 font-light lg:text-xl">{item.subtext}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </>
  )
}
