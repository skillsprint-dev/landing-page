import * as React from "react"

export default function Features() {
  const featureProps = {
    items: [
      {
        text: "Personalized Training Programs",
        subtext: "Our instructors carefully craft personalized training programs based on your strengths and weaknesses, so you can focus on what matters the most.",
        image: "training_program.jpg",
      },
      {
        text: "1-on-1 Sessions with Instructors",
        subtext: "Our instructors are themselves highly skilled software engineers. They are your mentors and supporters. Using their experience to guide you on the right path.",
        image: "1-on-1.jpg",
      },
      {
        text: "Resume Perfection Service",
        subtext: "Having read through thousands of resumes, our team knows what works and what doesn't. We will help you craft the perfect resume that stand out from the crowd.",
        image: "resume_service.jpg",
      },
      {
        text: "Mock Interviews",
        subtext: "You will gain an incredible amount of confidence after your first mock interview. But we won't stop there. By the end of the program, going to a real interview will feel like a walk in the park, if you like parks.",
        // image: "https://placehold.co/600x400/EEE/31343C",
        image: "mock_interview.jpg",
      },
      {
        text: "Career Referral",
        subtext: "Our connections with the employers bring you exclusive referral opportunities. We will help you find the right fit for your career.",
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
                    <img className="mb-4 rounded-lg lg:mb-0 lg:flex w-1/2 aspect-video object-cover" src={item.image} alt="dashboard feature image" />
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
