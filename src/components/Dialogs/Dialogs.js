import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ))

  let messagesElements = props.messages.map((message) => (
    <Message message={message.message} />
  ))

  let newMessageElement = React.createRef()

  let onAddMessage = () => {
    props.addMessage()
  }

  let onMessageChange = (event) => {
    let text = event.target.value
    props.undateNewMessageText(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea
            placeholder="AAAAAAAAAAAA"
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.newMessageText}
            cols="70"
            rows="5"
          ></textarea>
        </div>
        <div>
          <button onClick={onAddMessage}>Add message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
