/*import { useParams } from 'react-router-dom'
import Locations from '../data/Locations.json'
import '../styles/Tag.scss'

const TagAndRating = () => {
  const { id } = useParams()
  const logement = Locations.find((item) => item.id === id)

  if (!logement) {
    return <p>Logement introuvable.</p>
  }

  const fullStars = parseInt(logement.rating)
  const maxStars = 5

  return (
    <div className="tag-rating">
      <div className="tag-rating_tags">
        {logement.tags.map((tag, index) => (
          <span className="tag-rating_tag" key={index}>{tag}</span>
        ))}
      </div>

      <div className="tag-rating_stars">
        {[...Array(maxStars)].map((_, i) => (
          <i
            key={i}
            className={`fa-star ${i < fullStars ? 'fas' : 'far'}`}
          ></i>
        ))}
      </div>
    </div>
  )
}

export default TagAndRating*/
import { useParams } from 'react-router-dom'
import Locations from '../data/Locations.json'
import '../styles/Tag.scss'

const HostAndRating = () => {
  const { id } = useParams()
  const logement = Locations.find((item) => item.id === id)

  if (!logement) {
    return <p>Logement introuvable.</p>
  }

  const fullStars = parseInt(logement.rating)
  const maxStars = 5

  return (
    <div className="host-rating">
      <div className="host-stars">
        {[...Array(maxStars)].map((_, i) => (
          <i
            key={i}
            className={`fa-star ${i < fullStars ? 'fas' : 'far'}`}
          ></i>
        ))}
      </div>
      <div className="host-info">
        <p className="host-name">{logement.host.name}</p>
        <img
          src={logement.host.picture}
          alt={logement.host.name}
          className="host-picture"
        />
      </div>
    </div>
  )
}

export default HostAndRating
