import { get } from '../helpers/axiosHelper'

const getEducation = async () => get('http://localhost:8080/data/education.json')

export default {
  getEducation
}
