import React from 'react'
import { images } from '../../constants'

const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className="p__font" style={{ color: '#fff', fontSize: '1.2rem' }}>
        {title}
      </p>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </div>
  )
}

export default SubHeading
