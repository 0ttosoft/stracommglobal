"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"

const slides = [
  {
    image: "/images/hero-event.jpg",
    title: "Creating Unforgettable",
    highlight: "Experiences",
    subtitle: "Strategic Branding & Experiential Campaign Consultants",
  },
  {
    image: "/images/wedding.jpg",
    title: "Dreamy Weddings,",
    highlight: "Perfect Moments",
    subtitle: "From intimate ceremonies to grand celebrations",
  },
  {
    image: "/images/corporate.jpg",
    title: "Corporate Events",
    highlight: "Reimagined",
    subtitle: "Professional events that inspire and engage",
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            {/* Tagline */}
            <div
              className={`mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm transition-all duration-700 ${loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-white/80">
                Stracomm Global
              </span>
            </div>

            {/* Title */}
            <h1
              className={`font-serif text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl transition-all duration-700 delay-200 ${loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
            >
              <span className="text-balance block">{slides[current].title}</span>
              <span className="text-balance block text-accent">{slides[current].highlight}</span>
            </h1>

            {/* Subtitle */}
            <p
              className={`mt-6 max-w-xl text-lg text-white/70 leading-relaxed transition-all duration-700 delay-300 ${loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
            >
              {slides[current].subtitle}
            </p>

            {/* CTAs */}
            <div
              suppressHydrationWarning
              className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-500 ${loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
            >
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/portfolio"
                className="group flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                <Play className="h-4 w-4" />
                View Our Work
              </Link>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-10 left-4 flex items-center gap-3 lg:left-8">
            {slides.map((_, i) => (
              <button
                key={`slide-${slides[i].image}`}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-10 bg-accent" : "w-5 bg-white/30 hover:bg-white/50"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 right-4 hidden flex-col items-center gap-2 lg:right-8 lg:flex">
            <span className="text-[10px] font-medium uppercase tracking-widest text-white/40">
              Scroll
            </span>
            <div className="h-12 w-px bg-white/20">
              <div className="h-4 w-px animate-pulse bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
