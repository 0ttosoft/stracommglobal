"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const services = [
  {
    title: "Event Management",
    description: "End-to-end event planning and execution for memorable occasions of every scale.",
    image: "/images/hero-event.jpg",
    href: "/services/event-management",
  },
  {
    title: "Wedding Planning",
    description: "Crafting your dream wedding with meticulous attention to every detail.",
    image: "/images/wedding.jpg",
    href: "/services/wedding-planning",
  },
  {
    title: "Birthday Party",
    description: "Unique birthday celebrations tailored to your vision and style.",
    image: "/images/birthday.jpg",
    href: "/services/birthday-party",
  },
  {
    title: "Corporate Events",
    description: "Professional corporate gatherings that inspire and engage teams.",
    image: "/images/corporate.jpg",
    href: "/services/corporate-events",
  },
  {
    title: "Concerts & Shows",
    description: "Spectacular entertainment events with world-class production.",
    image: "/images/concert.jpg",
    href: "/services/concerts-shows",
  },
  {
    title: "Exhibitions",
    description: "Innovative trade show and exhibition setups that attract attention.",
    image: "/images/exhibition.jpg",
    href: "/services/exhibitions",
  },
]

export default function ServicesSection() {
  const { ref, isVisible } = useAnimateOnScroll()

  return (
    <section className="bg-background py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className={`mb-16 max-w-2xl ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            What We Do
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Services Crafted for{" "}
            <span className="text-accent">Extraordinary</span> Events
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From intimate gatherings to grand spectacles, we bring your vision to life with
            creativity and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Link
              key={service.href}
              href={service.href}
              className={`group relative overflow-hidden rounded-2xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/50 transition-all duration-500 group-hover:bg-foreground/70" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="mt-2 text-sm text-white/70 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`mt-12 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "600ms" }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-foreground hover:text-primary-foreground"
          >
            Explore All Services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
