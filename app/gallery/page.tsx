"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const galleryImages = [
  { src: "/images/hero-event.jpg", alt: "Luxury event venue setup", category: "Events" },
  { src: "/images/wedding.jpg", alt: "Beautiful wedding ceremony", category: "Weddings" },
  { src: "/images/birthday.jpg", alt: "Birthday party celebration", category: "Birthdays" },
  { src: "/images/corporate.jpg", alt: "Corporate conference", category: "Corporate" },
  { src: "/images/concert.jpg", alt: "Live concert performance", category: "Entertainment" },
  { src: "/images/exhibition.jpg", alt: "Exhibition setup", category: "Exhibitions" },
  { src: "/images/social-event.jpg", alt: "Social gathering event", category: "Social" },
  { src: "/images/gallery-1.jpg", alt: "Wedding reception table", category: "Weddings" },
  { src: "/images/gallery-2.jpg", alt: "Outdoor event setup", category: "Events" },
  { src: "/images/gallery-3.jpg", alt: "Stage performance", category: "Entertainment" },
  { src: "/images/gallery-4.jpg", alt: "Fine dining table setting", category: "Events" },
  { src: "/images/about-team.jpg", alt: "Team at work", category: "Behind the Scenes" },
]

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
    <section className="bg-background py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Masonry-like Grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => openLightbox(i)}
              className={`group mb-4 block w-full overflow-hidden rounded-2xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
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
                <div className="absolute inset-0 flex items-end bg-foreground/0 p-4 transition-all duration-500 group-hover:bg-foreground/50">
                  <span className="translate-y-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {image.category}
                  </span>
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
      <PageHeader
        title="Our"
        highlight="Gallery"
        subtitle="A visual journey through our most memorable events and celebrations."
        breadcrumb="Gallery"
      />
      <GalleryGrid />
      <Footer />
    </main>
  )
}
