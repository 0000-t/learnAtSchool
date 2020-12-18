import {
  request
} from './request.js'

export function getCourseContextAnalysis() {
  return request({
    url: '/analysis/getCourseContextAnalysis'
  })
}

export function studentDuration(interval = 10, maxValue = 20) {
  return request({
    url: '/analysis/studentDuration',
    params: {
      interval,
      maxValue
    }
  })
}