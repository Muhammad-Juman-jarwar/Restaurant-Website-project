import React from 'react'
import { images } from '../../constants'
import { wines, cocktails } from '../../constants/data'
import { SubHeading, MenuItem } from '../../components'

import './SpecialMenu.css'

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {wines.map((wine, index) => {
              return (
                <MenuItem
                  key={index + wine.title}
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                />
              )
            })}
          </div>
        </div>
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {cocktails.map((cocktail, index) => {
              return (
                <MenuItem
                  key={index + cocktail.title}
                  title={cocktail.title}
                  price={cocktail.price}
                  tags={cocktail.tags}
                />
              )
            })}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '15px' }}>
        <button type="button" className="custom__button">
          View more
        </button>
      </div>
    </div>
  )
}
export default SpecialMenu
