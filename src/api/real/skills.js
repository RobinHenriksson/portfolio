import { get } from '../helpers/axiosHelper'

const getSkills = async () => get('http://localhost:8080/data/skills.json')

export default {
  getSkills
}
