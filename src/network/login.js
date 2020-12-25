import {
  request
} from './request.js'

export function login(data) {
  return request({
    url: `/user/webLogin`,
    method: 'post',
    // header: {
    //   "accept": "*/*",
    //   "Content-Type": "application/json"
    // },
    data
  })
}