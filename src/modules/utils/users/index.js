import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_HOST

export const personalData = (id, token) => {
    // console.log(id, token);
    const urlPersonalData = URL + '/user/profile/' + id
    return axios.get(urlPersonalData, { headers: { Authorization: `Bearer ${token}` } })
}

export const searchReceiverUser = (param, token) => {
    const queryParam = {
        search: param.search ?? '',
        sort: '',
        page: param.page ?? '1',
        limit: param.limit ?? '5'
    }
    const urlSearchReceiver = URL + `/user?page=${queryParam.page}&limit=${queryParam.limit}&search=${queryParam.search}&sort=${queryParam.sort}`
    return axios.get(urlSearchReceiver, { headers: { Authorization: `Bearer ${token}` } })
}