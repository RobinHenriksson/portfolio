import { get } from '../helpers/axiosHelper'

const getExperiences = async () => get('/data/experience.json')

export default {
  getExperiences
}
