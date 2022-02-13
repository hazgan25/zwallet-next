import { ACTION_STRING } from '../actions/actionString'
import { ActionType } from 'redux-promise-middleware'

const initialStateTransferUser = {
    userData: {},
    transaction: {
        receiverId: null,
        amount: 0,
        notes: ''
    },
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    err: {},
}

export const transerUserReducer = (prevState = initialStateTransferUser, action) => {
    const { transferUser, transferParam } = ACTION_STRING
    const { Pending, Fulfilled, Rejected } = ActionType

    switch (action.type) {
        case transferUser.concat('_', Pending):
            return {
                ...prevState,
                isPending: true,
                isFulfilled: false,
                isRejected: false,
            }

        case transferUser.concat('_', Fulfilled):
            const data = action.payload.data
            return {
                ...prevState,
                isPending: false,
                isFulfilled: true,
                userData: data.data,
            }

        case transferUser.concat('_', Rejected):
            const errData = payload
            return {
                ...prevState,
                isPending: false,
                isRejected: true,
                errData
            }

        case transferParam:
            const transaction = {
                ...prevState.transaction,
                ...action.payload
            }
            return {
                ...prevState,
                isPending: false,
                isFulfilled: true,
                transaction,
            }

        default: return prevState
    }
}


const initalStateReceiver = {
    data: [],
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    errData: {},
}

export const searchReceiverReducer = (prevState = initalStateReceiver, action) => {
    const { searchReceiver } = ACTION_STRING
    const { Pending, Fulfilled, Rejected } = ActionType

    switch (action.type) {
        case searchReceiver.concat('_', Pending):
            return {
                ...prevState,
                isPending: true,
                isFulfilled: false,
                isRejected: false,
            }

        case searchReceiver.concat('_', Fulfilled):
            const data = action.payload.data
            return {
                ...prevState,
                isPending: false,
                isFulfilled: true,
                data: data.data,
            }

        case searchReceiver.concat('_', Rejected):
            const errData = action.payload
            return {
                ...prevState,
                isPending: false,
                isRejected: true,
                errData
            }

        default: return prevState
    }
} 