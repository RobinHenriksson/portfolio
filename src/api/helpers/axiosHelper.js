import axios from '../repository'
import qs from 'qs'

export const get = async (url) => {
  return axios({
    method: 'GET',
    url
  })
}

export const post = async (url, data) => {
  return axios({
    method: 'POST',
    url,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({
      ...data
    })
  })
}

export const put = async (url, data) => {
  return axios({
    method: 'PUT',
    url,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({
      ...data
    })
  })
}
