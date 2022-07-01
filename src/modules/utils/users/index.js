import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_HOST + '/user'

export const personalData = (id, token) => {
    const urlPersonalData = URL + '/profile/' + id
    return axios.get(urlPersonalData, { headers: { Authorization: `Bearer ${token}` } })
}

export const pinUser = (id, body, token) => {
    const urlPinUser = URL + `/pin/${id}`
    return axios.patch(urlPinUser, body, { headers: { Authorization: `Bearer ${token}` } })
}

export const checkPin = (pin, token) => {
    const urlCheckPin = URL + `/pin?pin=${pin}`
    return axios.get(urlCheckPin, { headers: { Authorization: `Bearer ${token}` } })
}

export const searchReceiverUser = (param, token) => {
    const queryParam = {
        search: param.search ?? '',
        sort: '',
        page: param.page ?? '1',
        limit: param.limit ?? '5'
    }
    const urlSearchReceiver = URL + `?page=${queryParam.page}&limit=${queryParam.limit}&search=${queryParam.search}&sort=${queryParam.sort}`
    return axios.get(urlSearchReceiver, { headers: { Authorization: `Bearer ${token}` } })
}