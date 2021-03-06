import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import dialogsReducer from './dialogs-reducer'
import navReducer from './nav-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './Users-reducer'
import authReducer from "./auth-reducer"
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navPage: navReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type RoorReducerType = typeof rootReducers
export type AppStateType = ReturnType<RoorReducerType>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
