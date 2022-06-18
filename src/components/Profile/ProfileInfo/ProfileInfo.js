import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>
                <img
                    src="https://huawei.ru/upload/iblock/31e/31eaec11dd323da24382d6b16397b968.jpg"
                    alt="ava"
                />
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div> {props.profile.fullName} </div>
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}/>
                {/*<div> {props.profile.aboutMe} </div>*/}
            </div>
        </div>
    )
}
export default ProfileInfo
