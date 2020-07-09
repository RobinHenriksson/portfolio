import { get } from '../helpers/axiosHelper'

const getProfile = async () => get('http://localhost:8080/data/profile.json')

export default {
  getProfile
}
