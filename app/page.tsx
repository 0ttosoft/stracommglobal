import Navbar from "@/components/navbar"
import HeroSection from "@/components/home/hero-section"
import MarqueeSection from "@/components/home/marquee-section"
import ServicesSection from "@/components/home/services-section"
import AboutPreview from "@/components/home/about-preview"
import StatsSection from "@/components/home/stats-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import CTASection from "@/components/home/cta-section"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <AboutPreview />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
