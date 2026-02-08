"use client"

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2, Phone, ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getServiceBySlug, servicesData } from "@/lib/services-data"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

function ServiceContent({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug)
  if (!service) return notFound()

  return (
    <>
      <ServiceHero service={service} />
      <ServiceDetails service={service} />
      <OtherServices currentSlug={slug} />
    </>
  )
}

function ServiceHero({
  service,
}: {
  service: ReturnType<typeof getServiceBySlug> & {}
}) {
  return (
    <section className="relative overflow-hidden bg-foreground pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <Link
          href="/services"
          className="mb-6 inline-flex items-center gap-2 text-sm text-primary-foreground/60 transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>
        <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-accent">
          {service.tagline}
        </span>
        <h1 className="font-serif text-3xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
          {service.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-primary-foreground/60 leading-relaxed">
          {service.description}
        </p>
      </div>
    </section>
  )
}

function ServiceDetails({
  service,
}: {
  service: ReturnType<typeof getServiceBySlug> & {}
}) {
  const { ref, isVisible } = useAnimateOnScroll()

  return (
    <section className="bg-background py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              What We Offer
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {service.details}
            </p>
            <ul className="mt-8 space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-105"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+919934261707"
                className="flex items-center gap-2 rounded-full border-2 border-foreground px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-foreground hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OtherServices({ currentSlug }: { currentSlug: string }) {
  const { ref, isVisible } = useAnimateOnScroll()
  const others = servicesData.filter((s) => s.slug !== currentSlug).slice(0, 3)

  return (
    <section className="bg-secondary py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className={`mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Other <span className="text-accent">Services</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {others.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:border-accent/30 hover:shadow-lg ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
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

export default function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)

  return (
    <main>
      <Navbar />
      <ServiceContent slug={slug} />
      <Footer />
    </main>
  )
}
