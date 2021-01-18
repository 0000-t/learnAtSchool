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

export function getParameters(id=1) {
  return request({
    url: `/parameters/${id}`,
  })
}