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
    title: "Event Management",
    tagline: "Complete Event Solutions",
    description:
      "Comprehensive event management services that handle every aspect of your event from concept to execution.",
    image: "/images/hero-event.jpg",
    features: [
      "Concept development & theme creation",
      "Venue sourcing & management",
      "Vendor coordination & logistics",
      "Audio-visual & technical setup",
      "On-site event management",
      "Post-event analysis & reporting",
    ],
    details:
      "At Stracomm Global, our event management services cover the complete lifecycle of your event. We begin with understanding your goals and vision, then craft a detailed plan that addresses every element from venue selection and decor to entertainment and catering. Our experienced team ensures seamless coordination between all stakeholders, delivering events that not only meet but exceed expectations.",
  },
  {
    slug: "wedding-planning",
    title: "Wedding Planning",
    tagline: "Your Dream Wedding, Our Expertise",
    description:
      "From intimate ceremonies to grand celebrations, we create weddings that are as unique as your love story.",
    image: "/images/wedding.jpg",
    features: [
      "Complete wedding design & styling",
      "Venue decoration & floral arrangements",
      "Catering & menu curation",
      "Entertainment & music coordination",
      "Photography & videography management",
      "Guest management & hospitality",
    ],
    details:
      "Your wedding is one of the most important days of your life, and we treat it with the reverence it deserves. Our wedding planning team works closely with you to understand your dreams and cultural traditions, creating a celebration that reflects your personal story. From the mandap design to the reception setup, every element is carefully curated to create a magical experience for you and your guests.",
  },
  {
    slug: "birthday-party",
    title: "Birthday Party Planning",
    tagline: "Celebrate Every Milestone",
    description:
      "Unique and memorable birthday celebrations tailored to your style, theme, and vision.",
    image: "/images/birthday.jpg",
    features: [
      "Theme conceptualization & design",
      "Balloon & decor installations",
      "Custom cake & dessert arrangements",
      "Entertainment & activity planning",
      "Photo booth & memory stations",
      "Return gift curation",
    ],
    details:
      "Whether it's a first birthday or a milestone celebration, we create birthday parties that leave lasting impressions. Our team specializes in transforming venues into immersive themed experiences with stunning decorations, engaging activities, and delightful treats. We handle every detail so you can focus on celebrating with your loved ones.",
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    tagline: "Professional Events, Powerful Impact",
    description:
      "Strategic corporate events that align with your brand values and business objectives.",
    image: "/images/corporate.jpg",
    features: [
      "Conference & seminar management",
      "Product launch events",
      "Team building activities",
      "Award ceremonies & galas",
      "Brand activation campaigns",
      "Virtual & hybrid event solutions",
    ],
    details:
      "Our corporate event services are designed to help businesses create impactful experiences that strengthen brand identity and foster meaningful connections. Whether you're planning a product launch, annual conference, or team-building retreat, we bring strategic thinking and creative execution to deliver professional events that achieve your business goals.",
  },
  {
    slug: "concerts-shows",
    title: "Concerts & Shows",
    tagline: "Spectacular Entertainment",
    description:
      "Large-scale entertainment events with world-class production quality and audience engagement.",
    image: "/images/concert.jpg",
    features: [
      "Artist management & booking",
      "Stage design & production",
      "Sound & lighting systems",
      "Crowd management & security",
      "Ticketing & promotion",
      "Live streaming solutions",
    ],
    details:
      "From intimate acoustic sessions to massive outdoor festivals, we produce concerts and shows that deliver unforgettable entertainment experiences. Our production team brings together world-class sound, lighting, and stage design to create spectacular performances that captivate audiences and leave them wanting more.",
  },
  {
    slug: "exhibitions",
    title: "Exhibitions & Trade Shows",
    tagline: "Showcase Your Brand",
    description:
      "Custom exhibition setups that attract attention, engage visitors, and generate leads.",
    image: "/images/exhibition.jpg",
    features: [
      "Custom booth design & fabrication",
      "Interactive display solutions",
      "Lead generation strategies",
      "Visitor engagement activities",
      "Logistics & setup management",
      "Post-event lead follow-up support",
    ],
    details:
      "Make a lasting impression at trade shows and exhibitions with our custom-designed booth solutions. We combine innovative design with strategic branding to create exhibition spaces that stand out, attract visitors, and effectively communicate your brand message. Our comprehensive service covers everything from concept to dismantling.",
  },
  {
    slug: "social-gatherings",
    title: "Social Gatherings",
    tagline: "Memorable Social Events",
    description:
      "Elegant social events that bring people together and create cherished memories.",
    image: "/images/social-event.jpg",
    features: [
      "Engagement & anniversary celebrations",
      "Cocktail parties & dinners",
      "Festival celebrations",
      "Reunion planning",
      "Theme party design",
      "Catering & bar services",
    ],
    details:
      "Social gatherings are about bringing people together in meaningful ways. Whether it's an engagement party, anniversary celebration, or a festive get-together, we create warm and inviting atmospheres where memories are made. Our attention to detail in decor, food, and entertainment ensures every social event feels special and personal.",
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug)
}
