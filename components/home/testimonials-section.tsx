"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const testimonials = [
  {
    text: "Stracomm Global transformed our corporate event into an unforgettable experience. Their attention to detail and creative vision exceeded all our expectations.",
    author: "Rajesh Sharma",
    role: "CEO, TechVentures India",
  },
  {
    text: "Our wedding was everything we dreamed of and more. The team handled every detail with such care and professionalism. Truly magical!",
    author: "Priya & Arjun Mehta",
    role: "Wedding Clients",
  },
  {
    text: "From the initial planning to the final execution, Stracomm delivered excellence at every step. Our product launch was a massive success thanks to their expertise.",
    author: "Sneha Kapoor",
    role: "Marketing Head, InnovateCo",
  },
  {
    text: "The birthday celebration they organized for our daughter was spectacular. Every guest was amazed by the decorations and the seamless flow of the event.",
    author: "Amit & Neha Gupta",
    role: "Birthday Party Clients",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const { ref, isVisible } = useAnimateOnScroll()

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-background py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div
          className={`mx-auto max-w-3xl text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            What Our <span className="text-accent">Clients</span> Say
          </h2>
        </div>

        <div
          className={`mx-auto mt-12 max-w-3xl ${isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          style={{ animationDelay: "200ms" }}
        >
          <div className="relative rounded-2xl border border-border bg-card p-8 md:p-12">
            <Quote className="absolute left-6 top-6 h-10 w-10 text-accent/20" />
            <div className="relative">
              <p className="text-lg italic leading-relaxed text-foreground md:text-xl">
                {`"${testimonials[current].text}"`}
              </p>
              <div suppressHydrationWarning className="mt-8 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[current].author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].role}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={`testimonial-${testimonials[i].author}`}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current
                    ? "w-8 bg-accent"
                    : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
