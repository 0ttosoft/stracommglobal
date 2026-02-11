"use client"

import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const categories = ["All", "Corporate Events", "Government Summits", "Award Ceremonies", "Brand Activations", "Advertising Campaigns"]

const projects = [
  {
    title: "Tech Summit 2024",
    category: "Corporate Events",
    image: "/images/corporate.jpg",
    description: "Annual technology summit with keynote speakers, panel discussions, and networking sessions.",
  },
  {
    title: "National Leadership Summit",
    category: "Government Summits",
    image: "/images/wedding.jpg",
    description: "High-profile government summit bringing together policy makers and industry leaders.",
  },
  {
    title: "Excellence Awards Gala",
    category: "Award Ceremonies",
    image: "/images/gallery-1.jpg",
    description: "Premium award ceremony celebrating industry excellence with 500+ distinguished guests.",
  },
  {
    title: "Product Launch Experience",
    category: "Brand Activations",
    image: "/images/gallery-2.jpg",
    description: "Immersive brand activation creating memorable product launch experiences.",
  },
  {
    title: "Creative Campaign 2024",
    category: "Advertising Campaigns",
    image: "/images/gallery-3.jpg",
    description: "Multi-channel advertising campaign driving brand awareness and engagement.",
  },
  {
    title: "Innovation Expo",
    category: "Corporate Events",
    image: "/images/exhibition.jpg",
    description: "Technology innovation exhibition with 100+ booths and interactive displays.",
  },
  {
    title: "Industry Awards Night",
    category: "Award Ceremonies",
    image: "/images/birthday.jpg",
    description: "Prestigious industry awards recognizing outstanding achievements and innovation.",
  },
  {
    title: "Brand Experience Zone",
    category: "Brand Activations",
    image: "/images/concert.jpg",
    description: "Interactive brand experience creating lasting connections with target audiences.",
  },
  {
    title: "Corporate Gala Dinner",
    category: "Corporate Events",
    image: "/images/social-event.jpg",
    description: "Elegant corporate gala featuring premium dining and entertainment.",
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
              PORTFOLIO
            </span>
          </div>
          <h1
            className={`mb-6 text-4xl font-bold leading-tight tracking-tight text-background lg:text-6xl ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            style={{ animationDelay: "100ms" }}
          >
            Strategic Brand Experiences by{" "}
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              StraComm Global
            </span>
          </h1>
          <div
            className={`space-y-4 text-lg leading-relaxed text-background/80 ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            style={{ animationDelay: "200ms" }}
          >
            <p>
              The StraComm Global portfolio reflects our expertise in delivering strategic branding initiatives
              and experiential campaigns across sectors.
            </p>
            <p>
              From corporate events, government summits, and award ceremonies to brand activations and advertising
              campaigns, our work showcases <span className="font-semibold text-background">creativity backed by strategy</span>.
            </p>
            <p>
              Each project is customized to align with the client's vision, ensuring maximum engagement and brand impact.
            </p>
            <p className="text-xl font-semibold text-background">
              We don't just execute events — we create strategic brand experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All")
  const { ref, isVisible } = useAnimateOnScroll()

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="bg-background py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            Our Work
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore our collection of successfully executed projects across various sectors
          </p>
        </div>

        {/* Filters */}
        <div
          className={`mb-12 flex flex-wrap items-center justify-center gap-3 ${isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${activeFilter === cat
                ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                : "border border-border bg-background text-muted-foreground hover:border-accent hover:text-accent hover:shadow-md"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-accent/50 hover:shadow-2xl ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="translate-y-4 text-sm leading-relaxed text-white transition-all duration-500 group-hover:translate-y-0">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {project.category}
                </span>
                <h3 className="mt-3 text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PortfolioGrid />
      <Footer />
    </main>
  )
}
