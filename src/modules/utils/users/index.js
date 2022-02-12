import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_HOST

export const personalData = (id, token) => {
    // console.log(id, token);
    const urlPersonalData = URL + '/user/profile/' + id
    return axios.get(urlPersonalData, { headers: { Authorization: `Bearer ${token}` } })
}