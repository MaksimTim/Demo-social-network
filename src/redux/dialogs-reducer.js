const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      // добавляет сообщение в Dialogs
      let newMessage = {
        id: 4,
        message: state.newMessageText,
      }
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, newMessage],
      }
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      // Обновляет текст ввода из Dialogs, и кидает в state
      return { ...state, newMessageText: action.newText }
    }
    default:
      return state
  }
}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const undateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
})

export default dialogsReducer
