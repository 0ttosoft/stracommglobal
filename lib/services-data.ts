export interface ServiceData {
  slug: string
  title: string
  tagline: string
  description: string
  image: string
  features: string[]
  details: string
}

export const servicesData: ServiceData[] = [
  {
    slug: "event-management",
    title: "Event Management & Experiential Marketing",
    tagline: "Strategic Brand Experiences",
    description:
      "As experienced event planners and experiential campaign consultants, StraComm Global delivers end-to-end event solutions.",
    image: "/images/hero-event.jpg",
    features: [
      "Corporate Events & Conferences",
      "Award Nights & Gala Functions",
      "Product Launches & Brand Activations",
      "Government & Institutional Events",
      "Cultural & Musical Events",
      "Social Events",
    ],
    details:
      "Our event management services focus on audience engagement, brand recall, and flawless on-ground execution. We specialize in creating strategic brand experiences that align with business objectives and deliver measurable impact. From high-profile corporate conferences to government conclaves, award shows, and brand launches, we curate experiences that leave lasting impressions.",
  },
  {
    slug: "advertising",
    title: "Advertising & Brand Communication",
    tagline: "Multi-Channel Campaign Solutions",
    description:
      "StraComm Global operates as a strategic advertising and brand communication agency, offering multi-channel campaign solutions.",
    image: "/images/corporate.jpg",
    features: [
      "Brand Strategy & Campaign Planning",
      "Print, Outdoor & Media Advertising",
      "Digital Advertising & Social Media Campaigns",
      "Brand Films & Promotional Content",
    ],
    details:
      "We ensure consistent brand messaging across platforms, strengthening visibility and market presence. Our advertising services combine strategic thinking with creative excellence to deliver campaigns that resonate with target audiences and drive business results. From traditional media to digital platforms, we create integrated campaigns that maximize brand impact.",
  },
  {
    slug: "creative-design",
    title: "Creative & Design Solutions",
    tagline: "Impactful Brand Storytelling",
    description:
      "Our creative capabilities support impactful brand storytelling through innovative design and visual communication.",
    image: "/images/gallery-2.jpg",
    features: [
      "Event Branding & Visual Identity",
      "Graphic Design & Marketing Collaterals",
      "Theme Development & Creative Concepts",
    ],
    details:
      "We believe that great design is the foundation of effective brand communication. Our creative team develops compelling visual identities, marketing materials, and event branding that capture attention and communicate your brand message powerfully. From concept development to final execution, we ensure every design element aligns with your brand strategy.",
  },
  {
    slug: "production",
    title: "Production & Technical Execution",
    tagline: "Precision & Professionalism",
    description:
      "We manage complete event production with precision and professionalism, ensuring flawless technical execution.",
    image: "/images/concert.jpg",
    features: [
      "Stage, Set-Up & Technical Production",
      "Audio-Visual, Lighting & Sound Solutions",
      "Artist & Celebrity Management",
      "Vendor, Logistics & On-Ground Coordination",
    ],
    details:
      "Our production team brings technical expertise and meticulous planning to every project. We handle all aspects of event production, from stage design and setup to audio-visual systems, lighting, and sound. Our vendor management and logistics coordination ensure smooth execution, while our artist management services bring the right talent to your events.",
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug)
}
