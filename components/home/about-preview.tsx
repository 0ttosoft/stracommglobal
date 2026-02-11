"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const highlights = [
  "Tailored event strategies",
  "End-to-end project management",
  "Creative design & production",
  "Experienced professional team",
]

export default function AboutPreview() {
  const { ref, isVisible } = useAnimateOnScroll()

  return (
    <section className="bg-secondary py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <div
            className={`relative ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/about-team.jpg"
                alt="Stracomm Global team at work"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-accent px-6 py-4 text-center shadow-xl lg:-right-8">
              <span className="block font-serif text-3xl font-bold text-accent-foreground">
                10+
              </span>
              <span className="text-xs font-medium text-accent-foreground/80">
                Years of Excellence
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
              About Us
            </span>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Strategic Branding & <span className="text-accent">Experiential Campaigns</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              StraComm Global (Strategic Spotlight Communications) is a leading event management and advertising company,
              positioned as Strategic Branding and Experiential Campaign Consultants for brands that seek visibility with purpose.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We specialize in designing and executing strategic brand experiences, corporate events, and integrated
              advertising campaigns that leave a lasting impression. Our approach blends insight-driven strategy,
              creative excellence, and seamless execution.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Strategic Brand Experiences",
                "Corporate Events & Conclaves",
                "Integrated Advertising Campaigns",
                "Experiential Marketing"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              Discover Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
