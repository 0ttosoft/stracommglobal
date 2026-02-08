"use client"

import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

export default function CTASection() {
  const { ref, isVisible } = useAnimateOnScroll()

  return (
    <section className="relative overflow-hidden bg-foreground py-24 lg:py-32" ref={ref}>
      {/* Decorative */}
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-8">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Ready to Create Something{" "}
            <span className="text-accent">Extraordinary?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/60 leading-relaxed">
            {"Let's bring your vision to life. Whether it's a wedding, corporate event, or a grand celebration, we're here to make it unforgettable."}
          </p>
          <div suppressHydrationWarning className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20"
            >
              Start Planning
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+919934261707"
              className="flex items-center gap-2 rounded-full border border-primary-foreground/20 px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:border-primary-foreground/40 hover:bg-primary-foreground/5"
            >
              <Phone className="h-4 w-4" />
              +91 99342 61707
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
