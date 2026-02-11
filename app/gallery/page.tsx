"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const galleryImages = [
  { src: "/images/hero-event.jpg", alt: "Corporate conference setup", category: "Corporate Events" },
  { src: "/images/wedding.jpg", alt: "Award ceremony venue", category: "Award Nights" },
  { src: "/images/birthday.jpg", alt: "Cultural event celebration", category: "Cultural Events" },
  { src: "/images/corporate.jpg", alt: "Corporate conference", category: "Corporate Events" },
  { src: "/images/concert.jpg", alt: "Brand launch experience", category: "Brand Launches" },
  { src: "/images/exhibition.jpg", alt: "Exhibition setup", category: "Corporate Events" },
  { src: "/images/social-event.jpg", alt: "Advertising campaign shoot", category: "Advertising Campaigns" },
  { src: "/images/gallery-1.jpg", alt: "Premium event setup", category: "Corporate Events" },
  { src: "/images/gallery-2.jpg", alt: "Outdoor brand activation", category: "Brand Launches" },
  { src: "/images/gallery-3.jpg", alt: "Stage performance setup", category: "Cultural Events" },
  { src: "/images/gallery-4.jpg", alt: "Fine dining event", category: "Corporate Events" },
  { src: "/images/about-team.jpg", alt: "Behind the scenes", category: "Behind the Scenes" },
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
              GALLERY
            </span>
          </div>
          <h1
            className={`mb-6 text-4xl font-bold leading-tight tracking-tight text-background lg:text-6xl ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            style={{ animationDelay: "100ms" }}
          >
            Experiential Campaigns &{" "}
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Event Highlights
            </span>
          </h1>
          <div
            className={`space-y-4 text-lg leading-relaxed text-background/80 ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            style={{ animationDelay: "200ms" }}
          >
            <p>
              Explore the StraComm Global gallery for a visual journey through our events, experiential campaigns,
              and branding initiatives.
            </p>
            <p>
              The gallery captures moments from <span className="font-semibold text-background">corporate conferences, brand launches, award nights,
                cultural events, and integrated advertising campaigns</span>, showcasing our attention to detail and execution excellence.
            </p>
            <p className="text-xl font-semibold text-background">
              Every frame represents strategic thinking, creative execution, and successful brand communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function GalleryGrid() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const { ref, isVisible } = useAnimateOnScroll()

  const openLightbox = (index: number) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const nextImage = () =>
    setLightbox((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null))
  const prevImage = () =>
    setLightbox((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    )

  return (
    <section className="bg-background py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            Visual Stories
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A collection of moments that define our commitment to excellence
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => openLightbox(i)}
              className={`group mb-4 block w-full overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-2xl ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={i % 3 === 0 ? 400 : i % 3 === 1 ? 500 : 350}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-accent-foreground">
                      {image.category}
                    </span>
                    <p className="mt-2 text-sm text-white">{image.alt}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-4">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl">
            <Image
              src={galleryImages[lightbox].src || "/placeholder.svg"}
              alt={galleryImages[lightbox].alt}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto object-contain"
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-sm font-medium text-primary-foreground">
              {galleryImages[lightbox].alt}
            </p>
            <p className="mt-1 text-xs text-primary-foreground/50">
              {lightbox + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <GalleryGrid />
      <Footer />
    </main>
  )
}
