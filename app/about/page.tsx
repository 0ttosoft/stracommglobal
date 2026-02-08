"use client"

import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
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

function StorySection() {
  const { ref, isVisible } = useAnimateOnScroll()
  return (
    <section className="bg-background py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
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
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              A Decade of Creating <span className="text-accent">Extraordinary</span> Events
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Founded with a vision to redefine event management in India, Stracomm Global has
              grown from a passionate startup to one of the most trusted names in strategic
              branding and experiential campaigns. Our journey has been marked by innovation,
              creativity, and an unwavering commitment to client satisfaction.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Over the years, we have successfully executed hundreds of events across the
              country, from intimate gatherings to large-scale corporate conferences, each one
              tailored to exceed expectations and create lasting memories.
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
    <section className="bg-secondary py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div
            className={`rounded-2xl border border-border bg-background p-8 lg:p-12 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Target className="h-7 w-7 text-accent" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To deliver world-class event experiences through strategic planning, creative
              innovation, and flawless execution. We aim to be the bridge between our clients'
              vision and reality, creating moments that inspire, engage, and leave lasting
              impressions.
            </p>
          </div>
          <div
            className={`rounded-2xl border border-border bg-background p-8 lg:p-12 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Eye className="h-7 w-7 text-accent" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground">Our Vision</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To become the most sought-after event management and branding consultancy,
              recognized globally for our innovative approach, exceptional service quality, and
              our ability to transform events into powerful brand experiences.
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
    <section className="bg-background py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`mb-16 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            Our Values
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            What Drives <span className="text-accent">Us</span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
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
      <PageHeader
        title="About"
        highlight="Stracomm Global"
        subtitle="Strategic Branding & Experiential Campaign Consultants with over a decade of excellence in creating unforgettable events."
        breadcrumb="About Us"
      />
      <StorySection />
      <MissionVisionSection />
      <ValuesSection />
      <Footer />
    </main>
  )
}
