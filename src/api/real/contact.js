import { post } from '../helpers/axiosHelper'

const send = async (data) => post(`${process.env.VUE_APP_BACKEND_URL}/contact/`, data)

export default {
  send
}
