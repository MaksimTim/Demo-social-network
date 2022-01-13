import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://huawei.ru/upload/iblock/31e/31eaec11dd323da24382d6b16397b968.jpg" />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  )
}
export default Profile
