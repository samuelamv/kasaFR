import { useState } from 'react'
import '../styles/Dropdown.scss'

const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const childrenArray = Array.isArray(children) ? children : [children]
  const titleElement = childrenArray.find(child => child.type === 'h2')
  const contentElements = childrenArray.filter(child => child !== titleElement)

  const toggle = () => setIsOpen(!isOpen)

  return (
  <div className="accordion_containers">
    <div className="accordion">
      <button className="accordion_header" onClick={toggle}>
        {titleElement}
        <i className={`fa-solid fa-chevron-down arrow ${isOpen ? 'open' : ''}`}></i>
      </button>
      {isOpen && (
        <div className="accordion_content">
          {contentElements}
        </div>
      )}
    </div>
  </div>
  )
}

export default Dropdown
