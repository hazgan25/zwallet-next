import { ACTION_STRING } from '../actions/actionString'
import { ActionType } from 'redux-promise-middleware'

const initialState = {
    dataTopup: {},
    isPending: false,
    isFulfilled: false,
    isReject: false,
    errData: {}
}

const topupReducer = (prevState = initialState, action) => {
    const { topUp } = ACTION_STRING
    const { Pending, Fulfilled, Rejected } = ActionType

    switch (action.type) {
        case topUp.concat('_', Pending):
            return {
                ...prevState,
                isPending: true,
                isFulfilled: false,
                isReject: false,
            }

        case topUp.concat('_', Fulfilled):
            const dataTopup = action.payload
            return {
                ...prevState,
                isPending: false,
                isFulfilled: true,
                dataTopup
            }

        case topUp.concat('_', Rejected):
            const errData = action.payload
            return {
                ...prevState,
                isPending: false,
                isReject: true,
                errData
            }

        default: return prevState
    }
}

export default topupReducer