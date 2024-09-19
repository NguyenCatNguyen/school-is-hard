import React from 'react'


export default function Nav(){
  return (
    <div className='Nav container'>
      <div className="logo">Logo</div>
      <ul className="nav__List">
        <li className="nav__list">
          <a href="#" className="nav__link">Home</a>
        </li>
        <li className="nav__list">
          <a href="#" className="nav__link">Resources</a>
        </li>
        <li className="nav__list">
          <a href="#" className="nav__link">React Note</a>
        </li>
        <li className="nav__list">
          <a href="#" className="nav__link">Three.js Note</a>
        </li>
      </ul>
      {/* <div className="menu__backdrop">
        <button className="open--menu"></button>
        <ul className="nav__List">
        <li className="nav__list">
          <a href="#" className="nav__link">Home</a>
        </li>
        <li className="nav__list">
          <a href="#" className="nav__link">Resources</a>
        </li>
        <li className="nav__list">
          <a href="#" className="nav__link">React Note</a>
        </li>
        <li className="nav__list">
          <a href="#" className="nav__link">Three.js Note</a>
        </li>
      </ul>
      </div> */}
    </div>
  )
}
