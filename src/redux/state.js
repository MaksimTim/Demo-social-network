const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
      newMessageText: 'Vvedi soobshenie',
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
    if (action.type === ADD_POST) {
      // добавляет пост в Profile
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      }
      this._state.profilePage.posts.unshift(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      // Обновляет текст ввода из Profile, и кидает в state
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === 'ADD-MESSAGE') {
      // добавляет сообщение в Dialogs
      let newMessage = {
        id: 4,
        message: this._state.dialogsPage.newMessageText,
      }
      this._state.dialogsPage.messages.push(newMessage)
      this._state.dialogsPage.newMessageText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      // Обновляет текст ввода из Dialogs, и кидает в state
      this._state.dialogsPage.newMessageText = action.newMessage
      this._callSubscriber(this._state)
    }
  },
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' })

export const undateNewPostTextActionCreator = (text) => ({
  type: 'UPDATE-NEW-POST-TEXT',
  newText: text,
})

export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' })

export const undateNewMessageTextActionCreator = (text) => ({
  type: 'UPDATE-NEW-MESSAGE-TEXT',
  newMessage: text,
})

export default store
window.store = store
