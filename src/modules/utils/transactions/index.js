import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_HOST

export const dashboardData = (id, token) => {
    const urlDashboard = URL + '/dashboard/' + id
    return axios.get(urlDashboard, { headers: { Authorization: `Bearer ${token}` } })
}

export const historyTransaction = (param, token) => {
    const urlHistoryTransaction = `${URL}/transaction/history?page=${param.page}&limit=${param.limit}`
    return axios.get(urlHistoryTransaction, { headers: { Authorization: `Bearer ${token}` } })
}

export const topUpTransaction = (body, token) => {
    const urlTopup = URL + '/transaction/top-up'
    return axios.post(urlTopup, body, { headers: { Authorization: `Bearer ${token}` } })
}

export const transfer = (body, token) => {
    const urlTransfer = URL + '/transaction/transfer'
    return axios.post(urlTransfer, body, { headers: { Authorization: `Bearer ${token}` } })
}