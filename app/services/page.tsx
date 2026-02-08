"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { servicesData } from "@/lib/services-data"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

function ServicesGrid() {
  const { ref, isVisible } = useAnimateOnScroll()
  return (
    <section className="bg-background py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-accent/30 hover:shadow-xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/30 transition-all group-hover:bg-foreground/50" />
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {service.tagline}
                </span>
                <h3 className="mt-2 text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
      <PageHeader
        title="Our"
        highlight="Services"
        subtitle="From concept to execution, we deliver comprehensive event solutions tailored to your unique needs."
        breadcrumb="Services"
      />
      <ServicesGrid />
      <Footer />
    </main>
  )
}
