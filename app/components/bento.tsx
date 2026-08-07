import '../css/bento.css'

export default function Bento() {
  return (
    <section className="bento">
      {/* Card grande: destacado principal */}
      <div className="bento-cell bento-cell--lg">
        <h3>Resumen general</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati, voluptate?
        </p>
      </div>

      {/* Stat numérico */}
      <div className="bento-cell">
        <span className="bento-stat-number">24</span>
        <span className="bento-stat-label">Etiqueta</span>
      </div>

      {/* Ícono / label corto */}
      <div className="bento-cell bento-icon-cell">
        <span>Aa</span>
      </div>

      {/* Leyenda de estados, ocupa 2 filas */}
      <div className="bento-cell bento-cell--tall">
        <div className="bento-legend-item">
          <span className="bento-dot bento-dot--ok" />
          Estado saludable
        </div>
        <div className="bento-legend-item">
          <span className="bento-dot bento-dot--warn" />
          Requiere atención
        </div>
        <div className="bento-legend-item">
          <span className="bento-dot bento-dot--alert" />
          Estado crítico
        </div>
      </div>

      {/* Otro stat */}
      <div className="bento-cell">
        <span className="bento-stat-number">99</span>
        <span className="bento-stat-label">Etiqueta</span>
      </div>

      {/* Card ancha con líneas de contenido */}
      <div className="bento-cell bento-cell--wide bento-lines">
        <div className="bento-line" />
        <div className="bento-line" />
        <div className="bento-line" />
      </div>
    </section>
  )
}
