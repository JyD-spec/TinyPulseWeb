import { useState } from 'react'
import '../css/hero.css'

const SLIDES = 3

export default function Hero() {
  const [active, setActive] = useState(0)

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-eyebrow">TinyPulse</span>
        <h1>Título principal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati, voluptate?
        </p>

        <button className="hero-readmore">
          Read More <span>&rarr;</span>
        </button>

        <div className="hero-dots">
          {Array.from({ length: SLIDES }).map((_, i) => (
            <span
              key={i}
              className={i === active ? 'active' : ''}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>

      <div className="hero-media">
        {/* Reemplaza este placeholder con tu propia ilustración/imagen */}
        <span>Imagen / ilustración aquí</span>
      </div>
    </section>
  )
}
