import {connect} from 'react-redux'
import {
    addMessageActionCreator
} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import React from "react"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux"

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
