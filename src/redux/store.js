import dialogsReducer from './dialogs-reducer'
import navReducer from './nav-reducer'
import profileReducer from './profile-reducer'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'ti ne pidor', likesCount: 3 },
        { id: 2, message: 'ti pidor', likesCount: 12 },
      ],
      newPostText: 'ItKamasutra.com',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Maksim' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Kolya' },
      ],
      messages: [
        { id: 1, message: 'Hellou yopta' },
        { id: 2, message: 'ti pidor' },
        { id: 3, message: 'sam pidor' },
      ],
      newMessageText: '',
    },
    navPage: {
      friends: [
        { id: 1, name: 'Anton' },
        { id: 1, name: 'Misha' },
        { id: 1, name: 'Dima' },
        { id: 1, name: 'Vanya' },
        { id: 1, name: 'Ildar' },
      ],
    },
  },
  _callSubscriber() {
    console.log('state izmenilsya')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.navPage = navReducer(this._state.navPage, action)

    this._callSubscriber(this._state)
  },
}

export default store
