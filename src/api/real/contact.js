import { post } from '../helpers/axiosHelper'

const send = async (data) => post('https://robinhenriksson.se/contact/', data)

export default {
  send
}
