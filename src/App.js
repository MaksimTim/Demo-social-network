import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import { Route, Routes } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'

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
              <DialogsContainer
                dialogs={props.dialogs}
                messages={props.messages}
                newMessageText={props.newMessageText}
                dispatch={props.dispatch}
              />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
