import {
  request
} from './request.js'

export function getCategoryByPathAndSize(path, size = 10) {
  return request({
    url: `/online-study/category/all/${path}/${size}`
  })
}