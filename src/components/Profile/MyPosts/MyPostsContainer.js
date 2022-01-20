import React from 'react'
import {
  addPostActionCreator,
  undateNewPostTextActionCreator,
} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = (text) => {
    props.dispatch(undateNewPostTextActionCreator(text))
  }

  return (
    <MyPosts
      undateNewPostText={onPostChange}
      addPost={addPost}
      posts={props.posts}
      newPostText={props.newPostText}
    />
  )
}
export default MyPostsContainer
