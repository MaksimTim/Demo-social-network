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

  let addMessage = () => {
    let text = newMessageElement.current.value
    alert(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea ref={newMessageElement} cols="70" rows="5"></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
