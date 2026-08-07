type ProductCardProps = {
  title: string
  height: number
  image?: string
}

export default function ProductCard({ title, height, image }: ProductCardProps) {
  return (
    <div className="product-card">
      {image ? (
        <img src={image} alt={title} style={{ height }} />
      ) : (
        <div className="product-card-media" style={{ height }}>
          Imagen aquí
        </div>
      )}

      <div className="product-card-overlay">
        <button className="product-card-save">Guardar</button>

        <div className="product-card-footer">
          <span className="product-card-title">{title}</span>
          <span className="product-card-share" aria-label="Compartir">
            &#8599;
          </span>
        </div>
      </div>
    </div>
  )
}
