const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl: 'https://citaty.info/files/characters/29745.jpeg',
    //   followed: true,
    //   fullName: 'Dimon',
    //   status: 'Dimooooon',
    //   location: { city: 'Zainsk', country: 'Russia' },
    // },
    // {
    //   id: 2,
    //   photoUrl: 'https://citaty.info/files/characters/29745.jpeg',
    //   followed: false,
    //   fullName: 'Masha',
    //   status: 'Hello friends',
    //   location: { city: 'Kazan', country: 'Russia' },
    // },
    // {
    //   id: 3,
    //   photoUrl: 'https://citaty.info/files/characters/29745.jpeg',
    //   followed: false,
    //   fullName: 'Vasya',
    //   status: 'Youuu',
    //   location: { city: 'Piter', country: 'Russia' },
    // },
  ],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        }),
      }
    case SET_USERS: {
      return { ...state, users: [...action.users] }
    }
    default:
      return state
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })

export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer
