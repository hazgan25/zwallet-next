import { combineReducers } from 'redux'
import authReducer from './auth'
import { ACTION_STRING } from '../actions/actionString'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    auth: authReducer
})

const rootReducer = (state, action) => {
    const { authLogout } = ACTION_STRING
    if (action.type === authLogout) {
        storage.removeItem('persist:root')
        state = undefined
    }
    return reducers(state, action)
}

export default rootReducer