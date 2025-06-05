import '../styles/Gallerie.scss'
import Locations from '../data/Locations.json'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <div className="gallery">
  <div className="gallery_container">
    {Locations.map((location) => (
      <Link to={`/details/${location.id}`} key={location.id} className="gallery_card">
        <div className="gallery_image" style={{ backgroundImage: `url(${location.cover})` }}>
          <div className="gallery_overlay"></div>
          <h2 className="gallery_title">{location.title}</h2>
        </div>
      </Link>
    ))}
  </div>
</div>
  )
}

export default Gallery