export default function MarqueeSection() {
  const items = [
    "Event Management",
    "Wedding Planning",
    "Birthday Parties",
    "Corporate Events",
    "Concerts & Shows",
    "Exhibitions",
    "Social Gatherings",
    "Brand Activations",
  ]

  return (
    <section className="overflow-hidden border-y border-border bg-secondary py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-8 flex items-center gap-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
