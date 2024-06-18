"use client"
import * as React from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import "../../i18n.mjs"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Testimonials() {
  const { t } = useTranslation()
  const testimonialProps = {
    items: [
      {
        text: t("testimonialsPage.testimonialPropsItems.0.irisText"),
        author: "Iris W.",
        position: t("testimonialsPage.testimonialPropsItems.0.irisPosition"),
        image: null
      },
      {
        text: t("testimonialsPage.testimonialPropsItems.1.boyuText"),
        author: "Boyu T.",
        position: t("testimonialsPage.testimonialPropsItems.1.boyuPosition"),
        image: null
      },
      {
        text: t("testimonialsPage.testimonialPropsItems.2.harryText"),
        author: "Harry Z.",
        position: t("testimonialsPage.testimonialPropsItems.2.harryPosition"),
        image: null
      },
    ]
  }
  return (
    <>
      <section id="testimonials" className="bg-gray-50 dark:bg-gray-800">
        <div className="relative max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-white text-center pb-8">{t('testimonialsPage.studentsTestimonials')}</h1>
          <Carousel className="border-t border-gray-200 dark:border-gray-700 pt-8" opts={{ loop: true }}>
            <CarouselContent>
              {testimonialProps.items.map((item, index) => (
                <CarouselItem key={index}>
                  <div>
                    <figure className="max-w-screen-md mx-auto">
                      <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                      </svg>
                      <blockquote>
                        <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">{item.text}</p>
                      </blockquote>
                      <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        {item.image && <img className="w-6 h-6 rounded-full" src={item.image} alt="profile picture" />}
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                          <div className="pr-3 font-medium text-gray-900 dark:text-white">{item.author}</div>
                          <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{item.position}</div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>
    </>
  )
}
