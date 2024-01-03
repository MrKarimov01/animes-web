import React, { useState } from 'react'
import "./../viewS.scss"
import { Link } from 'react-router-dom'
import { Premium, Search, Usericon } from '../../assets/icons.jsx'

const Navbar = () => {
  const [searchToggle,setSearchToggle]= useState(false)
  const ToggleBtn = (element,element2)=>{
    element(!element2)
    console.log(element2);
  }


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
                <li>last</li>
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
        <Link to={"/premium"} className='nav_Premium'><Premium/><span>Premium</span></Link>
        <div className={searchToggle?"search_wrapper block":"search_wrapper"}>
        <div className="search_bar" >
          <input maxLength={30} min={3} type="text" placeholder='Anime Qidirish'/>
          <Search/>
        </div>
        </div>
        <div className="search_toggle" onClick={()=>{
          ToggleBtn(setSearchToggle, searchToggle)
        }} >
          <Search/> 
        </div>
        <div className="auth_user">
          <Usericon/>
        </div>
      </div>
    </div>
  )
}

export default Navbar