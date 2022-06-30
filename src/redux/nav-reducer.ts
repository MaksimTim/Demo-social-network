import {FriendType} from "../Types/Types";

let initialState = {
  friends: [
    { id: 1, name: 'Anton' },
    { id: 1, name: 'Misha' },
    { id: 1, name: 'Dima' },
    { id: 1, name: 'Vanya' },
    { id: 1, name: 'Ildar' },
  ] as Array<FriendType>
}
type InitialStateType = typeof initialState

const navReducer = (state = initialState, action: any): InitialStateType => {
  return state
}
export default navReducer
