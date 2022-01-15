import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'ti ne pidor', likesCount: 3 },
    { id: 2, message: 'ti pidor', likesCount: 12 },
  ]

  let postsElements = posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ))

  return (
    <div className={s.postsBlock}>
      <div>My post </div>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}
export default MyPosts
