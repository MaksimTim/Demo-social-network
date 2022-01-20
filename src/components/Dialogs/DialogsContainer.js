import React from 'react'
import {
  addMessageActionCreator,
  undateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }

  let onMessageChange = (text) => {
    props.dispatch(undateNewMessageTextActionCreator(text))
  }

  return (
    <Dialogs
      addMessage={addMessage}
      undateNewMessageText={onMessageChange}
      dialogs={props.dialogs}
      messages={props.messages}
      newMessageText={props.newMessageText}
    />
  )
}

export default DialogsContainer
