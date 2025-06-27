// components/InfoLocation.jsx
/*import Locations from '../data/Locations.json'
import { useParams } from 'react-router-dom'
import '../styles/InfoLocation.scss'

const InfoLocation = () => {
    const { id } = useParams()
    const logement = Locations.find((item) => item.id === id)

    return(
        <div className="info-location">
      <div className="info-location_left">
        <h1 className="info-location_title">{logement.title}</h1>
        <p className="info-location_location">{logement.location}</p>
      </div>
      <div className="info-location_host">
        <p className="info-location_host-name">{logement.host.name}</p>
        <img
          src={logement.host.picture}
          alt={logement.host.name}
          className="info-location_host-picture"
        />
      </div>
    </div>

    )
}

export default InfoLocation*/
import Locations from '../data/Locations.json'
import { useParams } from 'react-router-dom'
import '../styles/InfoLocation.scss'

const InfoLocation = () => {
  const { id } = useParams()
  const logement = Locations.find((item) => item.id === id)

  return (
    <div className="info-location">
      <div className="info-location_left">
        <h1 className="info-location_title">{logement.title}</h1>
        <p className="info-location_location">{logement.location}</p>
        <div className="info-location_tags">
          {logement.tags.map((tag, index) => (
            <span className="info-location_tag" key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfoLocation
