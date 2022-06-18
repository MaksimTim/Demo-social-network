const ADD_MESSAGE = 'ADD-MESSAGE'

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

}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      // добавляет сообщение в Dialogs
      let body = action.newMessageBody
      return {
        ...state,
        messages: [...state.messages, {id:6, message: body}],
      }
    }

    default:
      return state
  }
}
export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })

export default dialogsReducer
