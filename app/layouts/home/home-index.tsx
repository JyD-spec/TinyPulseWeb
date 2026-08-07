import '../../css/home.css'
import Hero from '../../components/hero'
import Artwork from '../../components/artwork'
import Bento from '../../components/bento'
import Explore from '../../components/explore'

export default function Home() {
  return (
    <div className="home">
      <Hero />

      <div className="home-grid">
        <Artwork />
        <Bento />
      </div>

      <Explore />
    </div>
  )
}