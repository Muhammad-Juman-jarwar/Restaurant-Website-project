import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import { awards } from '../../constants/data'

import './Laurels.css'

const AwardCard = (props) => {
  const { imgUrl, title, subtitle } = props
  return (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="awards" />
      <div className="app__laurels_award-cards_content">
        <p className="p__cormorant" style={{ color: '#dcca87' }}>
          {title}
        </p>
        <p className="p__cormorant">{subtitle}</p>
      </div>
    </div>
  )
}

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurels_awards">
          {awards.map((award, index) => {
            return <AwardCard {...award} key={index} />
          })}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="Laurels" />
      </div>
    </div>
  )
}
export default Laurels
