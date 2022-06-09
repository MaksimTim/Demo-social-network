const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  posts: [
    { id: 1, message: 'ti ne pidor', likesCount: 3 },
    { id: 2, message: 'ti pidor', likesCount: 12 },
  ],
  newPostText: 'ItKamasutra.com',
  profile: null
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
    case SET_USER_PROFILE: {
     return { ...state, profile: action.profile }
    }
    default:
      return state
  }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const undateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export default profileReducer
