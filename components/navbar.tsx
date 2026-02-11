"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    subLinks: [
      { href: "/services/event-management", label: "Event Management & Experiential Marketing" },
      { href: "/services/advertising", label: "Advertising & Brand Communication" },
      { href: "/services/creative-design", label: "Creative & Design Solutions" },
      { href: "/services/production", label: "Production & Technical Execution" },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={
              scrolled
                ? "/images/logo-dark.png"
                : "/images/logo-white.png"
            }
            alt="Stracomm Global Logo"
            width={48}
            height={48}
            className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
          />
          <div className="flex flex-col">
            <span
              className={`text-lg font-bold tracking-wider lg:text-xl transition-colors duration-500 ${scrolled ? "text-foreground" : "text-white"
                }`}
            >
              STRACOMM
            </span>
            <span
              className={`hidden text-[10px] tracking-widest lg:block transition-colors duration-500 ${scrolled ? "text-muted-foreground" : "text-white/70"
                }`}
            >
              GLOBAL
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.subLinks ? (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-accent/10 ${scrolled
                      ? "text-foreground hover:text-accent"
                      : "text-white/90 hover:text-white"
                    }`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div
                  className={`absolute left-0 top-full pt-2 transition-all duration-300 ${servicesOpen
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 -translate-y-2"
                    }`}
                >
                  <div className="w-64 rounded-xl border border-border bg-background p-2 shadow-xl">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block rounded-lg px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-accent/10 ${scrolled
                    ? "text-foreground hover:text-accent"
                    : "text-white/90 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919934261707"
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg lg:flex"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-lg p-2 transition-colors lg:hidden ${scrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
              }`}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="border-t border-border bg-background px-4 py-4">
          {navLinks.map((link) =>
            link.subLinks ? (
              <div key={link.href}>
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-96" : "max-h-0"
                    }`}
                >
                  {link.subLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg py-2.5 pl-8 pr-4 text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="tel:+919934261707"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
          >
            <Phone className="h-4 w-4" />
            +91 99342 61707
          </a>
        </nav>
      </div>
    </header>
  )
}
