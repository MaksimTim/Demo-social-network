import {DialogType, MessageType} from "../Types/Types"

const ADD_MESSAGE = 'ADD-MESSAGE'



let initialState = {
  dialogs: [
    { id: 1, name: 'Maksim' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Kolya' },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: 'Hellou uuuu' },
    { id: 2, message: 'aaaaaaaaa' },
    { id: 3, message: 'BBBBRRRrrrr' },
  ] as Array<MessageType>
}
export type InitialStateType = typeof initialState

export const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type AddMessageActionCreatorType = {
  type: typeof ADD_MESSAGE
  newMessageBody: string
}
export const addMessageActionCreator = (newMessageBody: string):AddMessageActionCreatorType => ({ type: ADD_MESSAGE, newMessageBody })

export default dialogsReducer
