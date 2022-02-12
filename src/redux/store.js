import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import rpm from 'redux-promise-middleware'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth', 'user', 'dashboard', 'history', 'topup']
}

const pReducers = persistReducer(persistConfig, rootReducer)
const enchancers = applyMiddleware(rpm, logger)
export const store = createStore(pReducers, enchancers)
export const pStore = persistStore(store)
