import { ACTION_STRING } from './actionString'
import { personalData } from 'src/modules/utils/users'
import { transfer } from 'src/modules/utils/transactions'

const { transferFeature, transferParam, transferUser } = ACTION_STRING

export const transferUserAction = (id, token) => {
    return {
        type: transferUser,
        payload: personalData(id, token)
    }
}

export const transferParamAction = (param) => {
    return {
        type: transferParam,
        payload: param
    }
}

export const transferFeatureAction = (body, token) => {
    return {
        type: transferFeature,
        payload: transfer(body, token)
    }
}