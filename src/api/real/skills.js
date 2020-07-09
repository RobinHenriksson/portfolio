import { get } from '../helpers/axiosHelper'

const getSkills = async () => get('/data/skills.json')

export default {
  getSkills
}
