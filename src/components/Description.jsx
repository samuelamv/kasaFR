import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Locations from '../data/Locations.json'
import '../styles/Description.scss'

const Description = () => {
  const { id } = useParams()
  const location = Locations.find((loc) => loc.id === id)

  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!location) return <p>Logement introuvable</p>

  const data = [
    { title: 'Description', content: location.description },
    { title: 'Équipements', content: location.equipments.join(', ') },
  ]

  return (
    <div className="accordion_container">
      {data.map((item, index) => (
        <div className="accordion" key={index}>
          <button className="accordion_header" onClick={() => toggle(index)}>
            {item.title}
            <i className={`fa-solid fa-chevron-down arrow ${openIndex === index ? 'open' : ''}`}></i>
          </button>
          {openIndex === index && (
            <div className="accordion_content">
              {index === 1 ? (
                <ul>
                  {location.equipments.map((eq, i) => (
                    <li key={i}>{eq}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Description
