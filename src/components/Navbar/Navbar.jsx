import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="gericht-logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="-__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="-__opensans">
          <a href="#about">About</a>
        </li>
        <li className="-__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="-__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="-__opensans">
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div></div>
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          style={{ color: '#fff', fontSize: '27px', cursor: 'pointer' }}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="-__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="-__opensans">
                <a href="#about">About</a>
              </li>
              <li className="-__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="-__opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="-__opensans">
                <a href="#contacts">Contacts</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
