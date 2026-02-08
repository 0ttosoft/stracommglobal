"use client"

import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const categories = ["All", "Weddings", "Corporate", "Birthday", "Concerts", "Exhibitions"]

const projects = [
  {
    title: "Royal Wedding Celebration",
    category: "Weddings",
    image: "/images/wedding.jpg",
    description: "A grand wedding celebration with 500+ guests featuring traditional decor and modern elements.",
  },
  {
    title: "Tech Summit 2024",
    category: "Corporate",
    image: "/images/corporate.jpg",
    description: "Annual technology summit with keynote speakers, panel discussions, and networking sessions.",
  },
  {
    title: "Golden Birthday Bash",
    category: "Birthday",
    image: "/images/birthday.jpg",
    description: "An extravagant 50th birthday celebration with a gold and white theme.",
  },
  {
    title: "Music Festival Night",
    category: "Concerts",
    image: "/images/concert.jpg",
    description: "Multi-artist music festival with spectacular stage production and 5000+ attendees.",
  },
  {
    title: "Innovation Expo",
    category: "Exhibitions",
    image: "/images/exhibition.jpg",
    description: "Technology innovation exhibition with 100+ booths and interactive displays.",
  },
  {
    title: "Elegant Reception",
    category: "Weddings",
    image: "/images/gallery-1.jpg",
    description: "An intimate wedding reception with stunning floral arrangements and ambient lighting.",
  },
  {
    title: "Outdoor Gala Event",
    category: "Corporate",
    image: "/images/gallery-2.jpg",
    description: "Corporate gala dinner under the stars with premium dining experience.",
  },
  {
    title: "Stage Performance Show",
    category: "Concerts",
    image: "/images/gallery-3.jpg",
    description: "High-energy stage performance with professional lighting and sound setup.",
  },
  {
    title: "Social Evening",
    category: "Corporate",
    image: "/images/social-event.jpg",
    description: "An elegant cocktail evening for networking and celebration.",
  },
]

function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All")
  const { ref, isVisible } = useAnimateOnScroll()

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="bg-background py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Filters */}
        <div
          className={`mb-12 flex flex-wrap items-center justify-center gap-3 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-accent text-accent-foreground"
                  : "border border-border bg-background text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
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
                <div className="absolute inset-0 flex items-end bg-foreground/0 p-6 transition-all duration-500 group-hover:bg-foreground/60">
                  <p className="translate-y-4 text-sm text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {project.category}
                </span>
                <h3 className="mt-1 text-lg font-bold text-foreground">{project.title}</h3>
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
      <PageHeader
        title="Our"
        highlight="Portfolio"
        subtitle="Explore our collection of successfully executed events across various categories."
        breadcrumb="Portfolio"
      />
      <PortfolioGrid />
      <Footer />
    </main>
  )
}
