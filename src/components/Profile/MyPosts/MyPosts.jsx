import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      <div>My post </div>
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post massage="ti pidor" />
        <Post massage="ti ne pidor" />
        <Post />
        <Post />
      </div>
    </div>
  )
}
export default MyPosts
