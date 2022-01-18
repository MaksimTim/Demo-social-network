import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import { Route, Routes } from 'react-router-dom'

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar friends={props.friends} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                posts={props.posts}
                dispatch={props.dispatch}
                newPostText={props.newPostText}
              />
            }
          />
          <Route
            path="/dialogs*"
            element={
              <Dialogs dialogs={props.dialogs} messages={props.messages} />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
