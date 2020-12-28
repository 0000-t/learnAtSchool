import {
  request
} from './request.js'

//根据页码获取课程
export function getCourseByPathAndSize(page, size = 10) {
  return request({
    url: `/course/findAllPage/${page}/${size}`
  })
}

//根据id删除课程
export function deleteCourseById(id) {
  return request({
    url: `/course/${id}`,
    method: 'delete'
  })
}

//根据id修改课程
export function updateCourseById(data) {
  return request({
    url: `/course/updateTitle`,
    method: 'put',
    data
  })
}

//添加课程
export function appendCourse(data) {
  return request({
    url: '/course',
    method: 'post',
    data
  })
}

//根据id查找课程
export function selectCourseById(id) {
  return request({
    url: `/course/${id}`
  })
}

//获取全部课程
export function getAllCourse() {
  return request({
    url: `/course`
  })
}

//增加目录
export function appendCatalog(data) {
  return request({
    url: `/course/addCata`,
    method: 'post',
    header: {
      "Content-type": "multipart/form-data"
    },
    data
  })
}

//修改目录
export function updateCatalog(data) {
  return request({
    url: `/course/updateCata`,
    method: 'put',
    data
  })
}

//删除目录
export function deleteCatalog(id) {
  return request({
    url: `/course/deleteCata/${id}`,
    method: 'delete'
  })
}

//给用户的课程
export function appendUserCourse(data) {
  return request({
    url: `/course/addUserCourse`,
    method: 'post',
    data
  })
}

//获取用户的课程
export function getCourseByUserId(userId) {
  return request({
    url: `/course/findByUserId/${userId}`
  })
}