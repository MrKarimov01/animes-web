import React from 'react'
import "./../viewS.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Nav_container'>
      <div className="Routs">
        <div className="logo">
            <Link to={"/"}><span>U</span>zb<br/><span>A</span>nime</Link>
            
        </div>
        <ul className='nav_links'>
          <li><span>Genre</span>
          <span className='underline'></span>
          <div className="drop_menuWrapper">
            <ul className='drop_first'>
                <li>first</li>
                <li>sevent</li>
                <li>last</li>
              </ul>
          </div>
          </li>
          <li><span>Movies</span>
          <span className='underline'></span>
          <div className="drop_menuWrapper">
            <ul className='drop_first'>
                <li>first</li>
                <li>sevent</li>
                <li>last</li>
              </ul>
          </div>
          </li>
          <li><span>ONAs</span>
          <span className='underline'></span>
          </li>
          <li><span>News</span>
          <span className='underline'></span>
          </li>
        </ul>
      </div>
      <div className="fuctions">

      </div>
    </div>
  )
}

export default Navbar