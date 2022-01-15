import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://download-cs.org/uploads/posts/2020-06/1593142222_5.jpg"
        alt="аватарка"
      />
      {props.message}
      <div>
        <span>Like:</span>
        {props.likesCount}
      </div>
    </div>
  )
}

export default Post
