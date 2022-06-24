import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'ti ne pidor', likesCount: 3},
        {id: 2, message: 'ti pidor', likesCount: 12},
        {id: 2, message: 'ioioioioi', likesCount: 10}
    ]
}

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('akakaka')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(4)
});

test('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('akakaka')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts[0].message).toBe('akakaka')
});

test('after deleting of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(2)
});

test('after deleting length shouldnt be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3)
});