import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: 'Maksim' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Kolya' },
  ]
  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ))

  let messages = [
    { id: 1, message: 'Hellou yopta' },
    { id: 2, message: 'ti pidor' },
    { id: 3, message: 'sam pidor' },
  ]
  let messagesElements = messages.map((message) => (
    <Message message={message.message} />
  ))

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  )
}

export default Dialogs
