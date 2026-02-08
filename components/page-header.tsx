"use client"

interface PageHeaderProps {
  title: string
  highlight?: string
  subtitle: string
  breadcrumb: string
}

export default function PageHeader({
  title,
  highlight,
  subtitle,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-foreground pt-32 pb-20 lg:pt-40 lg:pb-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <span className="mb-4 inline-block text-sm font-medium text-accent">
          {"Home > "}
          {breadcrumb}
        </span>
        <h1 className="font-serif text-3xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
          {title}{" "}
          {highlight && <span className="text-accent">{highlight}</span>}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-primary-foreground/60 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
