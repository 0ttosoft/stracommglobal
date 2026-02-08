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
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Your Vision, Our{" "}
              <span className="text-accent">Expertise</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              At Stracomm Global, we specialize in strategic branding and experiential campaigns
              that transform ordinary events into extraordinary experiences. With over a decade of
              expertise, our team brings creativity, precision, and passion to every project.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
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
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
