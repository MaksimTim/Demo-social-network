import { combineReducers, createStore } from 'redux'
import dialogsReducer from './dialogs-reducer'
import navReducer from './nav-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './Users-reducer'
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navPage: navReducer,
  usersPage: usersReducer,
  auth: authReducer
})

let store = createStore(reducers)

export default store
