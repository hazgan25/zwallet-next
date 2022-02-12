import { ACTION_STRING } from 'src/redux/actions/actionString'
import { dashboardData } from 'src/modules/utils/transactions'

export const dashboardAction = (id, token) => {
    const { dashboardPersonal } = ACTION_STRING
    return {
        type: dashboardPersonal,
        payload: dashboardData(id, token)
    }
}