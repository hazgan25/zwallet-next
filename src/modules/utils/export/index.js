import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_HOST + '/export/transaction'

export const getPDF = (id, token) => {
    const urlGetPDf = URL + `/${id}`
    return axios.get(urlGetPDf, { headers: { Authorization: `Bearer ${token}` } })
}