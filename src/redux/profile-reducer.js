const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    { id: 1, message: 'ti ne pidor', likesCount: 3 },
    { id: 2, message: 'ti pidor', likesCount: 12 },
  ],
  newPostText: 'ItKamasutra.com',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      // добавляет пост в Profile
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      }
      return { ...state, newPostText: '', posts: [newPost, ...state.posts] }
    }
    case UPDATE_NEW_POST_TEXT: {
      // Обновляет текст ввода из Profile, и кидает в state
      return { ...state, newPostText: action.newText }
    }
    default:
      return state
  }
}
export const addPostActionCreator = () => ({ type: ADD_POST })

export const undateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export default profileReducer
