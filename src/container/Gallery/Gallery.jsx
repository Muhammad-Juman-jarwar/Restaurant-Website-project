import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs'

import './Gallery.css'

const imgGallery = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
]

const Gallery = () => {
  // const [imageSLider, setImageSLider] = React.useState()
  const scrollRef = React.useRef()

  const handleGallery = (direction) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  console.log(scrollRef)

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#aaa', marginTOp: '2rem' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          voluptates possimus tempora similique adipisci.
        </p>
        <button className="custom__button" type="button">
          View more
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {imgGallery.map((image, index) => {
            return (
              <div
                className="app__gallery-images_card flex__center"
                key={`$gallery_image-${index + 1}`}
              >
                <img src={image} alt="gallery" />
                <BsInstagram className='gallery__image-icon'/>
              </div>
            )
          })}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => handleGallery('left')}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => handleGallery('Right')}
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery
