import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import Features from '@/components/Features'
import Services from '@/components/Services'
import Action from '@/components/Action'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <Action />
      <Footer />
    </main>
  )
}
