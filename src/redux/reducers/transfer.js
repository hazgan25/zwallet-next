import { ACTION_STRING } from '../actions/actionString'
import { ActionType } from 'redux-promise-middleware'

const initialStateTransferUser = {
    userData: {},
    transaction: {
        id: null,
        senderId: null,
        receiverId: null,
        balance: 0,
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
            const errData = action.payload
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