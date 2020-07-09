import axios from 'axios'

axios.defaults.baseURL = `/`
axios.defaults.withCredentials = true
axios.defaults.responseType = 'json'

export default axios
