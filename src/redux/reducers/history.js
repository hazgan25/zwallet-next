import { ActionType } from 'redux-promise-middleware'
import { ACTION_STRING } from 'src/redux/actions/actionString'

const initialState = {
    historyData: [],
    isPending: false,
    isFulfilled: false,
    isReject: false,
    errData: {}
}

const historyReducer = (prevState = initialState, action) => {
    const { historyTransactionPersonal } = ACTION_STRING
    const { Pending, Fulfilled, Rejected } = ActionType

    switch (action.type) {
        case historyTransactionPersonal.concat('_', Pending):
            return {
                ...prevState,
                isPending: true,
                isFulfilled: false,
                isReject: false,
            }

        case historyTransactionPersonal.concat('_', Fulfilled):
            const data = action.payload.data
            // console.log(data.data)
            return {
                ...prevState,
                isPending: false,
                isFulfilled: true,
                historyData: data.data
            }

        case historyTransactionPersonal.concat('_', Rejected):
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

export default historyReducer