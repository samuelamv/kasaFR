import { useParams, Navigate } from 'react-router-dom'
import Locations from '../data/Locations.json'
import Slider from '../components/Slider'
import InfoLocation from '../components/InfoLocation'
import TagAndRating from '../components/Tag'
import Description from '../components/Description'

function Details() {
  const { id } = useParams()
  const location = Locations.find((item) => item.id === id)

  if (!location) {
    return <Navigate to="/error" replace />
  }
  return (
    <div className="details">
      <Slider />
      <InfoLocation />
      <TagAndRating />
      <Description />
    </div>
  )
}

export default Details