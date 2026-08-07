import '../../css/products.css'
import ProductCard from '../../components/product-card'

type Product = {
  id: string
  title: string
  height: number
}

// Alturas variadas para simular el efecto masonry, como en Pinterest.
// Reemplaza `title` y agrega `image` en cada item cuando tengas assets reales.
const PRODUCTS: Product[] = [
  { id: '1', title: 'Producto 1', height: 260 },
  { id: '2', title: 'Producto 2', height: 340 },
  { id: '3', title: 'Producto 3', height: 200 },
  { id: '4', title: 'Producto 4', height: 300 },
  { id: '5', title: 'Producto 5', height: 220 },
  { id: '6', title: 'Producto 6', height: 380 },
  { id: '7', title: 'Producto 7', height: 260 },
  { id: '8', title: 'Producto 8', height: 240 },
  { id: '9', title: 'Producto 9', height: 320 },
  { id: '10', title: 'Producto 10', height: 200 },
  { id: '11', title: 'Producto 11', height: 280 },
  { id: '12', title: 'Producto 12', height: 340 },
]

export default function Products() {
  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Productos</h1>
        <p>Explora todo lo que tenemos disponible.</p>
      </div>

      <div className="products-masonry">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            height={product.height}
          />
        ))}
      </div>
    </div>
  )
}
