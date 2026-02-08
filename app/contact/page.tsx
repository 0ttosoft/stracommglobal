"use client"

import React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { Phone, Mail, MapPin, Clock, Send, Facebook, Youtube } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    detail: "+91 99342 61707",
    href: "tel:+919934261707",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@stracommglobal.com",
    href: "mailto:info@stracommglobal.com",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Ashiyana Galaxy, 312B, Exhibition Rd, Salimpur Ahra, Dujra Diara, Patna, Bihar 800001",
    href: "https://www.google.com/maps/place/Stracomm",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon - Sat: 10AM - 7PM",
    href: null,
  },
]

export default function ContactPage() {
  const { ref, isVisible } = useAnimateOnScroll()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", eventType: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main>
      <Navbar />
      <PageHeader
        title="Contact Us"
        subtitle="Let's create something extraordinary together"
        bgImage="/images/social-event.jpg"
      />

      <section className="bg-background py-24 lg:py-32" ref={ref}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div
              className={`lg:col-span-2 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
            >
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
                Get in Touch
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                {"Let's Plan Your "}
                <span className="text-accent">Perfect Event</span>
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Whether you have a specific vision or need creative guidance, our team is here
                to bring your event to life. Reach out to us today.
              </p>

              <div className="mt-10 flex flex-col gap-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  const content = (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
                        <p className="mt-0.5 font-semibold text-foreground">{item.detail}</p>
                      </div>
                    </div>
                  )
                  return item.href ? (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="rounded-xl transition-colors hover:bg-muted/50 p-2 -m-2"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.title} className="p-2 -m-2">
                      {content}
                    </div>
                  )
                })}
              </div>

              {/* Social */}
              <div className="mt-10">
                <p className="text-sm font-medium text-muted-foreground">Follow Us</p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/stracommglobal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-all hover:scale-110 hover:bg-accent"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.youtube.com/@StraComm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-all hover:scale-110 hover:bg-accent"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div
              className={`lg:col-span-3 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
              style={{ animationDelay: "200ms" }}
            >
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                      <Send className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">
                      Message Sent!
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Thank you for reaching out. We will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, name: e.target.value }))
                          }
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, email: e.target.value }))
                          }
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="eventType" className="mb-2 block text-sm font-medium text-foreground">
                          Event Type
                        </label>
                        <select
                          id="eventType"
                          value={formData.eventType}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, eventType: e.target.value }))
                          }
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                        >
                          <option value="">Select event type</option>
                          <option value="wedding">Wedding</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="birthday">Birthday Party</option>
                          <option value="concert">Concert / Show</option>
                          <option value="exhibition">Exhibition</option>
                          <option value="social">Social Gathering</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, message: e.target.value }))
                        }
                        className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                        placeholder="Tell us about your event..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="group flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
                    >
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
              Our Location
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Find Us Here
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Ashiyana Galaxy, 312B, Exhibition Rd, Salimpur Ahra, Dujra Diara, Patna, Bihar 800001
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7104867279327!2d85.144205!3d25.6145349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed597daa9036fb%3A0xf722f7ff8cce2846!2sStracomm!5e0!3m2!1sen!2sin!4v1770551575579!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stracomm Global Location"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
