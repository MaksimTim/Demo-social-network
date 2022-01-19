const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      // добавляет пост в Profile
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      }
      state.posts.unshift(newPost)
      state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      // Обновляет текст ввода из Profile, и кидает в state
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}
export const addPostActionCreator = () => ({ type: 'ADD-POST' })

export const undateNewPostTextActionCreator = (text) => ({
  type: 'UPDATE-NEW-POST-TEXT',
  newText: text,
})

export default profileReducer
