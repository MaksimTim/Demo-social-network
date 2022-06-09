import React from 'react'
import { NavLink } from 'react-router-dom'
import MyFriends from './MyFriends'
import s from './Navbar.module.css'

const Navbar = (props) => {
  let friendsElement = props.friends.map((friend) => (
    <MyFriends name={friend.name} key={friend.id} />
  ))

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
        <div>
            <NavLink
                to="/users"
                className={(navData) => (navData.isActive ? s.active : s.item)}
            >
                Users
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
      <div className={s.myFriends}>
        <div>My Friends</div>
        <div className={s.friendsList}>{friendsElement}</div>
      </div>
    </nav>
  )
}

export default Navbar
