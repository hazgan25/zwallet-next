import { ACTION_STRING } from 'src/redux/actions/actionString'
import { ActionType } from 'redux-promise-middleware'

const initialState = {
    dashboardData: {
        totalIncome: 0,
        totalExpense: 0,
        listIncome: []
    },
    isPending: false,
    isFulfilled: false,
    isReject: false,
    errData: {}
}

const dashboarReducer = (prevState = initialState, action) => {
    const { dashboardPersonal } = ACTION_STRING
    const { Pending, Fulfilled, Rejected } = ActionType

    switch (action.type) {
        case dashboardPersonal.concat('_', Pending):
            return {
                ...prevState,
                isPending: true,
                isFulfilled: false,
                isReject: false,
            }

        case dashboardPersonal.concat('_', Fulfilled):
            const data = action.payload.data
            const dashboardData = {
                totalIncome: data.data.totalIncome,
                totalExpense: data.data.totalExpense,
                listIncome: data.data.listIncome
            }
            return {
                ...prevState,
                isPending: false,
                isFulfilled: true,
                dashboardData
            }

        case dashboardPersonal.concat('_', Rejected):
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

export default dashboarReducer