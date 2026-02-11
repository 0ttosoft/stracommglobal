"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { servicesData } from "@/lib/services-data"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

function HeroSection() {
  const { ref, isVisible } = useAnimateOnScroll()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 py-20 lg:py-32" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className={`mb-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent">
              SERVICES
            </span>
          </div>
          <h1
            className={`mb-6 text-4xl font-bold leading-tight tracking-tight text-background lg:text-6xl ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            style={{ animationDelay: "100ms" }}
          >
            Strategic Branding, Events &{" "}
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Experiential Campaigns
            </span>
          </h1>
          <p
            className={`text-lg leading-relaxed text-background/80 ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            style={{ animationDelay: "200ms" }}
          >
            From concept to execution, we deliver comprehensive strategic branding and event solutions
            tailored to your unique business objectives.
          </p>
        </div>
      </div>
    </section>
  )
}

function ServicesGrid() {
  const { ref, isVisible } = useAnimateOnScroll()
  return (
    <section className="bg-background py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            Our Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive solutions for all your branding and event needs
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {servicesData.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-accent/50 hover:shadow-2xl ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {service.tagline}
                </span>
                <h3 className="mt-3 text-xl font-bold text-foreground transition-colors group-hover:text-accent lg:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <Footer />
    </main>
  )
}
