// components/Slider.jsx
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Locations from '../data/Locations.json'
import '../styles/Slider.scss'

const Slider = () => {
  const { id } = useParams()
  const logement = Locations.find((item) => item.id === id)

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + logement.pictures.length) % logement.pictures.length
    )
  }

  if (!logement) return <p>Logement introuvable</p>

  return (
    <div className="slider">
      {logement.pictures.length > 1 && (
        <>
          <i className="fa-solid fa-chevron-left slider_arrow left" onClick={prevSlide}></i>
          <i className="fa-solid fa-chevron-right slider_arrow right" onClick={nextSlide}></i>
          <div className="slider_counter">
            {currentIndex + 1} / {logement.pictures.length}
          </div>
        </>
      )}
      <img
        src={logement.pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slider_image"
      />
    </div>
  )
}

export default Slider
