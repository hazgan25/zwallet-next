import { ACTION_STRING } from 'src/redux/actions/actionString'
export const initialState = {
    userData: null
}

const usersReducer = (prevState = initialState, action) => {
    const userDataPersonal = ACTION_STRING.userData
    switch (action.type) {
        case userDataPersonal:
            const data = action.payload
            return {
                ...prevState.userData,
                data
            }
        default: return prevState
    }
}

export default usersReducer