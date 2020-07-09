import { get } from '../helpers/axiosHelper'

const getExperiences = async () => get('http://localhost:8080/data/experience.json')

export default {
  getExperiences
}
