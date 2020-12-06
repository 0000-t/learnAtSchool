import {
  request
} from './request.js'

//根据页码获取学习信息
export function getStudyByPageAndSize(page, size = 10) {
  return request({
    url: `/learnrecord/search/${page}/${size}`,
    method: 'post',
    data: {
      searchMap: {}
    }
  })
}

//根据id删除学习
export function deleteStudyById(id) {
  return request({
    url: `/study/${id}`,
    method: 'delete',
  })
}

//根据id修改学习
export function updateStudyById(data) {
  return request({
    url: `/study/${data.id}`,
    method: 'put',
    data
  })
}

//添加学习信息
export function appendStudy(data) {
  return request({
    url: '/study',
    method: 'post',
    data
  })
}

//根据id查找学习
export function selectStudyById(id) {
  return request({
    url: `/study/${id}`
  })
}

//获取全部学习
export function getAllStudy() {
  return request({
    url: `/study`
  })
}