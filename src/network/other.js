import {
  request
} from './request.js'

export function setParameters(data) {
  return request({
    url: `/parameters`,
    method: 'put',
    data
  })
}