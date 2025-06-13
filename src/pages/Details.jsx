import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Locations from '../data/Locations.json'
import Slider from '../components/Slider'
import InfoLocation from '../components/InfoLocation'
import TagAndRating from '../components/Tag'
import Dropdown from '../components/Dropdown'

function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [logement, setLogement] = useState(null)

  useEffect(() => {
    const found = Locations.find(item => item.id === id)
    if (found) {
      setLogement(found)
    } else {
      navigate('/404') // redirige si id invalide
    }
  }, [id, navigate])

  if (!logement) return null // ou un spinner
  return (
    <div className="details">
      <Slider />
      <InfoLocation />
      <TagAndRating />
      <div className="accordion_container">
      <Dropdown title="Description">
        <h2 className='accordionTitle'>Description</h2>
        <p>{logement.description}</p>
      </Dropdown>

      <Dropdown title="Équipements">
        <h2 className='accordionTitle'>Equipement</h2>
        <ul>
          {logement.equipments.map((equipement, index) => (
            <li key={index}>{equipement}</li>
          ))}
        </ul>
      </Dropdown>
    </div>
    </div>
  )
}

export default Details