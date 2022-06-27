import React from "react";
import {Input, TextArea} from "../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import s from './ProfileInfo.module.css'
import styles from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error && <div className={styles.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>Fullname:</b> <Field component={Input}
                                    validate={[]}
                                    name='fullName'
                                    placeholder="Fullname"/>
        </div>
        <div>
            <b>About me:</b> <Field component={TextArea}
                                    validate={[]}
                                    name='aboutMe'
                                    placeholder=""/>
        </div>
        <div>
            <b>Looking for a job:</b> <Field component={Input}
                                             validate={[]}
                                             name='lookingForAJob'
                                             placeholder=""
                                             type={'checkbox'}/>
        </div>
        <div>
            <b>My professional skills:</b> <Field component={TextArea}
                                                  validate={[]}
                                                  name='lookingForAJobDescription'
                                                  placeholder="My professional skills"/>
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}:</b> <Field component={Input}
                                     validate={[]}
                                     name={'contacts.' + key}
                                     placeholder={key}/>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm