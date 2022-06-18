import {Field, reduxForm} from "redux-form";
import React from "react";
import {TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={TextArea}
                   validate={[required, maxLength50]}
                   name='newMessageBody'
                   placeholder="AAAAAAAAAAAA"/>
        </div>
        <div>
            <button>Add message</button>
        </div>
    </form>
}

export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
