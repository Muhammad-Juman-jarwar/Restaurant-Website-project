import React from 'react'
// import { FooterOverlay } from '../../components'
import { Newsletter } from '../../components'
import { images } from '../../constants'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import './Footer.css'

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact us</h1>
          <p className="p__opensans">9 W 53rd str, Oslo City, NY 10019, Oslo</p>
          <p className="p__opensans">+011 576 4892</p>
          <p className="p__opensans">+011 576 4892</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p__opensans">
            The best way to find yourself is to loose your self in the service
            of others
          </p>
          <img
            src={images.spoon}
            alt="spoonimage"
            style={{ marginTop: '2rem' }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday - Friday:</p>
          <p className="p__opensans">08 : 00 am - 12 : 00 pm</p>
          <p className="p__opensans">Saturday - Sunday</p>
          <p className="p__opensans">07 : 00 am - 11 : 00 pm</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">2021 Geright. All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
