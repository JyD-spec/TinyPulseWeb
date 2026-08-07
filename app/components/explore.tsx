import '../css/explore.css'

type ExploreCard = {
  number: string
  title: string
  description: string
}

const CARDS: ExploreCard[] = [
  {
    number: '01',
    title: 'Monitoreo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    number: '02',
    title: 'Alertas',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    number: '03',
    title: 'Reportes',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

export default function Explore() {
  return (
    <section className="explore">
      <div className="explore-header">
        <div className="explore-title">
          <h2>Elige tu categoría</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati, voluptate?
          </p>
        </div>
        <span className="explore-count">01 / Categorías</span>
      </div>

      <div className="explore-divider" />

      <div className="explore-body">
        <button className="explore-nav" aria-label="Anterior">
          &larr;
        </button>

        <div className="explore-cards">
          {CARDS.map((card) => (
            <div className="explore-card" key={card.number}>
              <span className="explore-card-number">{card.number}</span>
              <div className="explore-card-media">Ilustración aquí</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button className="explore-card-btn">Explorar</button>
            </div>
          ))}
        </div>

        <button className="explore-nav" aria-label="Siguiente">
          &rarr;
        </button>
      </div>
    </section>
  )
}
