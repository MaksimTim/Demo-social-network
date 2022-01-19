const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      // добавляет сообщение в Dialogs
      let newMessage = {
        id: 4,
        message: state.newMessageText,
      }
      state.messages.push(newMessage)
      state.newMessageText = ''
      return state
    case UPDATE_NEW_MESSAGE_TEXT:
      // Обновляет текст ввода из Dialogs, и кидает в state
      state.newMessageText = action.newText
      return state
    default:
      return state
  }
}
export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' })

export const undateNewMessageTextActionCreator = (text) => ({
  type: 'UPDATE-NEW-MESSAGE-TEXT',
  newText: text,
})

export default dialogsReducer
