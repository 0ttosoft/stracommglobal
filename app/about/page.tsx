"use client"

import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { Target, Eye, Award, Users, Heart, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our hearts into every event, ensuring each detail reflects our dedication to excellence.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of trends, bringing fresh and creative solutions to every project we undertake.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, turning their vision into reality through transparent partnerships.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards, delivering flawless execution every single time.",
  },
]

function HeroSection() {
  const { ref, isVisible } = useAnimateOnScroll()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 py-20 lg:py-32" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className={`mb-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent">
              ABOUT US
            </span>
          </div>
          <h1
            className={`mb-6 text-4xl font-bold leading-tight tracking-tight text-background lg:text-6xl ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            style={{ animationDelay: "100ms" }}
          >
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              StraComm Global
            </span>
          </h1>
          <div
            className={`space-y-4 text-lg leading-relaxed text-background/80 ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            style={{ animationDelay: "200ms" }}
          >
            <p className="text-xl font-semibold text-background">
              Strategic Spotlight Communications
            </p>
            <p>
              StraComm Global is a leading event management and advertising company, positioned as{" "}
              <span className="font-semibold text-background">Strategic Branding and Experiential Campaign Consultants</span>{" "}
              for brands that seek visibility with purpose.
            </p>
            <p>
              We specialize in designing and executing strategic brand experiences, corporate events, and integrated
              advertising campaigns that leave a lasting impression. Our approach blends insight-driven strategy,
              creative excellence, and seamless execution to help brands communicate powerfully with their audiences.
            </p>
            <p className="text-xl font-semibold text-background">
              At StraComm Global, we believe every brand interaction is an opportunity to tell a story.
            </p>
            <p>
              From high-profile corporate events and government conclaves to award shows, brand launches, and experiential
              marketing campaigns, we curate experiences that align with business objectives and deliver measurable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function StorySection() {
  const { ref, isVisible } = useAnimateOnScroll()
  return (
    <section className="bg-background py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src="/images/about-team.jpg"
                alt="Stracomm Global team working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
              Our Story
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Creating <span className="text-accent">Strategic Brand Experiences</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Founded with a vision to redefine event management and brand communication in India, StraComm Global has
              grown from a passionate startup to one of the most trusted names in strategic branding and experiential campaigns.
              Our journey has been marked by innovation, creativity, and an unwavering commitment to client satisfaction.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Over the years, we have successfully executed hundreds of high-impact events and campaigns across the
              country—from intimate brand activations to large-scale corporate conferences and government summits—each one
              tailored to exceed expectations and create lasting brand impressions.
            </p>
            <p className="mt-4 text-base font-semibold text-foreground">
              We don't just manage events. We create strategic moments that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function MissionVisionSection() {
  const { ref, isVisible } = useAnimateOnScroll()
  return (
    <section className="bg-secondary py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div
            className={`rounded-2xl border border-border bg-background p-8 shadow-lg transition-all duration-300 hover:shadow-xl lg:p-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Target className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To deliver world-class brand experiences through strategic planning, creative
              innovation, and flawless execution. We aim to be the bridge between our clients'
              vision and reality, creating moments that inspire, engage, and leave lasting
              impressions that drive business results.
            </p>
          </div>
          <div
            className={`rounded-2xl border border-border bg-background p-8 shadow-lg transition-all duration-300 hover:shadow-xl lg:p-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Eye className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To become the most sought-after strategic branding and experiential campaign consultancy,
              recognized globally for our innovative approach, exceptional service quality, and
              our ability to transform brand interactions into powerful, memorable experiences that
              create lasting value.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const { ref, isVisible } = useAnimateOnScroll()
  return (
    <section className="bg-background py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`mb-16 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            Our Values
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            What Drives <span className="text-accent">Us</span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`rounded-2xl border border-border bg-card p-6 text-center shadow-lg transition-all duration-300 hover:border-accent/30 hover:shadow-xl ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <value.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StorySection />
      <MissionVisionSection />
      <ValuesSection />
      <Footer />
    </main>
  )
}
