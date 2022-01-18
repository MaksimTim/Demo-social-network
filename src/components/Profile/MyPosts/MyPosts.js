import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ))

  let newPostElement = React.createRef()

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' })
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
  }

  return (
    <div className={s.postsBlock}>
      <div>My post </div>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
            cols="70"
            rows="5"
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}
export default MyPosts
