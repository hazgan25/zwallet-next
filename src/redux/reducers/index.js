import { ACTION_STRING } from '../actions/actionString'
import { combineReducers } from 'redux'
import authReducer from './auth'
import usersReducer from './user'
import storage from 'redux-persist/lib/storage'
import dashboarReducer from './dashboard'
import historyReducer from './history'
import topupReducer from './topup'
import { transerUserReducer, searchReceiverReducer } from './transfer'

const reducers = combineReducers({
    auth: authReducer,
    user: usersReducer,
    dashboad: dashboarReducer,
    history: historyReducer,
    topup: topupReducer,
    userTransfer: transerUserReducer,
    searchReceiver: searchReceiverReducer
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