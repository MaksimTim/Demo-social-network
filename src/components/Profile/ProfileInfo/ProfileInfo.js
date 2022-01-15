import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://huawei.ru/upload/iblock/31e/31eaec11dd323da24382d6b16397b968.jpg"
          alt="ava"
        />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  )
}
export default ProfileInfo
