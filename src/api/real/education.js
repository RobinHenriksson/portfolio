import { get } from '../helpers/axiosHelper'

const getEducation = async () => get('/data/education.json')

export default {
  getEducation
}
