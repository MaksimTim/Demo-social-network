import { connect } from 'react-redux'
import {
  addPostActionCreator,
  undateNewPostTextActionCreator,
} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    undateNewPostText: (text) => {
      dispatch(undateNewPostTextActionCreator(text))
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
