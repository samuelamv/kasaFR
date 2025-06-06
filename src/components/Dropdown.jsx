import { useState } from 'react'
import '../styles/Dropdown.scss'

const data = [
  {
    title: 'Fiabilité',
    content:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    title: 'Respect',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    title: 'Service',
    content:
      'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
  },
  {
    title: 'Sécurité',
    content:
      'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien en respectés. Nous organiserons également des ateliers sur la sécurité domestique pour nos hôtes.',
  },
]

const AboutAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
                <p>{item.content}</p>
                </div>
            )}
        </div>
      ))}
    </div>
  )
}

export default AboutAccordion
