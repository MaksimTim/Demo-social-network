import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Massages
        </NavLink>
      </div>
      <div className={s.item}>
        <a href="news">News</a>
      </div>
      <div className={s.item}>
        <a href="music">Music</a>
      </div>
      <div className={s.item}>
        <a href="settings">Settings</a>
      </div>
    </nav>
  )
}

export default Navbar
