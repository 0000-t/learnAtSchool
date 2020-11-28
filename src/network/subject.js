import {
  request
} from './request.js'

//根据页码获取课题信息
export function getSubjectByPathAndSize(page, size = 10) {
  return request({
    url: `/subject/findAll/${page}/${size}`
  })
}

//根据id删除课题
export function deleteSubjectById(id) {
  return request({
    url: `/subject/${id}`,
    method: 'delete',
  })
}

//根据id修改课题
export function updateSubjectById(data) {
  return request({
    url: '/subject',
    method: 'put',
    data
  })
}

//添加课题信息
export function appendSubject(data) {
  return request({
    url: '/subject',
    method: 'post',
    data
  })
}

//根据id查找课题
export function selectSubjectById(id) {
  return request({
    url: `/subject/${id}`
  })
}

//获取全部课题
export function getAllSubject() {
  return request({
    url: `/subject`
  })
}