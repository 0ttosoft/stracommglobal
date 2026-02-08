import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Youtube, ExternalLink } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
]

const services = [
  { href: "/services/event-management", label: "Event Management" },
  { href: "/services/wedding-planning", label: "Wedding Planning" },
  { href: "/services/birthday-party", label: "Birthday Party" },
  { href: "/services/corporate-events", label: "Corporate Events" },
  { href: "/services/concerts-shows", label: "Concerts & Shows" },
  { href: "/services/exhibitions", label: "Exhibitions" },
]

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Social Cards Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <h3 className="mb-8 text-center font-serif text-2xl font-bold text-primary-foreground">
            Connect With Us
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Google Business Card */}
            <a
              href="https://www.google.com/maps/place/Stracomm"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-primary-foreground/10"
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-accent/20">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-primary-foreground">Google Business Profile</span>
                  <ExternalLink className="h-3.5 w-3.5 text-primary-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-1 text-sm text-primary-foreground/60">
                  Ashiyana Galaxy, 312B, Exhibition Rd, Patna, Bihar 800001
                </p>
                <div suppressHydrationWarning className="mt-2 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-accent" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-xs text-primary-foreground/50">5.0</span>
                </div>
              </div>
            </a>

            {/* Facebook Card */}
            <a
              href="https://www.facebook.com/stracommglobal/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-all duration-300 hover:border-[#1877F2]/40 hover:bg-primary-foreground/10"
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#1877F2]/20">
                <Facebook className="h-8 w-8 text-[#1877F2]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-primary-foreground">Facebook Page</span>
                  <ExternalLink className="h-3.5 w-3.5 text-primary-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-1 text-sm text-primary-foreground/60">
                  Follow us for latest events & updates
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs font-medium text-[#1877F2]">@stracommglobal</span>
                  <span className="rounded-full bg-[#1877F2]/20 px-2 py-0.5 text-[10px] font-medium text-[#1877F2]">
                    Follow
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-white.png"
                alt="Stracomm Global"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <div>
                <span className="text-lg font-bold tracking-wider text-primary-foreground">
                  STRACOMM
                </span>
                <p className="text-[10px] tracking-widest text-primary-foreground/50">GLOBAL</p>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
              Strategic Branding & Experiential Campaign Consultants. Creating unforgettable
              experiences that leave lasting impressions.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/stracommglobal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/10 text-primary-foreground/60 transition-all hover:border-accent hover:text-accent"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@StraComm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/10 text-primary-foreground/60 transition-all hover:border-accent hover:text-accent"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+919934261707"
                className="flex items-center gap-3 text-sm text-primary-foreground/60 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                +91 99342 61707
              </a>
              <a
                href="mailto:info@stracommglobal.com"
                className="flex items-center gap-3 text-sm text-primary-foreground/60 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                info@stracommglobal.com
              </a>
              <a
                href="https://www.google.com/maps/place/Stracomm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-primary-foreground/60 transition-colors hover:text-accent"
              >
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>Ashiyana Galaxy, 312B, Exhibition Rd, Salimpur Ahra, Dujra Diara, Patna, Bihar 800001</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-primary-foreground/40 md:flex-row lg:px-8">
          <p>
            {"© "}
            {new Date().getFullYear()} Stracomm Global. All rights reserved.
          </p>
          <p>Strategic Branding & Experiential Campaign Consultants</p>
        </div>
      </div>
    </footer>
  )
}
