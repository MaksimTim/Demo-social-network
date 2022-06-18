import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import {AddMessageFormRedux} from "./AddMessageForm";


const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map((dialog) => (
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
    ))

    let messagesElements = props.messages.map((message) => (
        <Message message={message.message} key={message.id}/>
    ))

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs
