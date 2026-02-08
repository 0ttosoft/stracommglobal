"use client"

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 500, suffix: "+", label: "Events Completed" },
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Team Members" },
]

function AnimatedCounter({
  target,
  suffix,
  start,
}: {
  target: number
  suffix: string
  start: boolean
}) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!start || started.current) return
    started.current = true

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [start, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const { ref, isVisible } = useAnimateOnScroll(0.3)

  return (
    <section className="relative overflow-hidden bg-foreground py-20 lg:py-24" ref={ref}>
      {/* Background Pattern */}
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
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="font-serif text-4xl font-bold text-accent md:text-5xl lg:text-6xl">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  start={isVisible}
                />
              </div>
              <p className="mt-3 text-sm font-medium text-primary-foreground/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
