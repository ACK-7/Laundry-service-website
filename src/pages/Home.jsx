import Header from '../component/Header'
import Hero from '../component/HeroSection'
import Services from '../component/ServiceSection'
import Process from '../component/Process'
import Pricing from '../component/PricingSection'
import Testimonials from '../component/TestimonialSection'
import Contact from '../component/ContactSection'
import Footer from '../component/Footer'
import { Element } from 'react-scroll';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Element name="services">
          <Services />
        </Element>
        <Element name="process">
          <Process />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="testimonials">
          <Testimonials />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </main>
      <Footer />
    </div>
  )
} 