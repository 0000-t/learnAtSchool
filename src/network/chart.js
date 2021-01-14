import {
  request
} from './request.js'

export function getCourseContextAnalysis() {
  return request({
    url: '/analysis/getCourseContextAnalysis'
  })
}

export function studentDuration(interval, maxValue) {
  return request({
    url: '/analysis/studentDuration',
    params: {
      interval,
      maxValue
    }
  })
}