import { get } from '../helpers/axiosHelper'

const getProfile = async () => get('/data/profile.json')

export default {
  getProfile
}
