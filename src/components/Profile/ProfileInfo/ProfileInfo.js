import React, {useState} from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files[0]) {
            props.savePhoto(e.target.files)
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
            setEditMode(false)
        })

    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {props.isOwner && <input type={'file'}
                                         onChange={onMainPhotoSelected}
                />}
                <div> {props.profile.fullName} </div>
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}/>
                {editMode
                    ? <ProfileDataFormReduxForm initialValues={props.profile}
                                                profile={props.profile}
                                                onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile}
                                   isOwner={props.isOwner}
                                   goToEditMode={() => setEditMode(true)}/>
                }
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return <div>
        {props.isOwner && <div>
            <button onClick={props.goToEditMode}>Edit</button>
        </div>}
        <div>
            <b>Fullname:</b> {props.profile.fullName}
        </div>
        <div>
            <b>About me:</b> {props.profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {props.profile.lookingForAJob &&
        <div>
            <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}: </b> {contactValue}
    </div>
}

export default ProfileInfo
