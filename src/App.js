import './App.css'
import React, {Suspense} from 'react'
import Navbar from './components/Navbar/Navbar'
import {HashRouter, Route, Routes} from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer'
import {withRouter} from "./components/Profile/ProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import {connect, Provider} from "react-redux"
import {compose} from "redux"
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from './redux/redux-store'

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const LoginPage = React.lazy(() => import("./components/Login/Login"))


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar friends={this.props.friends}/>
                <div className="app-wrapper-content">
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}/>
                            <Route path="/dialogs*" element={<DialogsContainer/>}/>
                            <Route path="/users*" element={<UsersContainer/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const SamuraiJSApp = (props) => {
    return <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <AppContainer friends={store.getState().navPage.friends}/>
            </Provider>
        </HashRouter>
    </React.StrictMode>
}

export default SamuraiJSApp